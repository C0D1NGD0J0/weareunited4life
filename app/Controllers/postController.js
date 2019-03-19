const User = require('../Models/User');
const Post = require('../Models/Post');
const validate = require("../Util/validations");
const _ = require("lodash");

const convertTagStringToArray = function(resource, str){
	// str = str.toLowerCase().replace(/,/g, "").split(" ");
	str = str.toLowerCase().split(" ").filter(() => true);
	_.uniq(str).forEach((word) =>{
		resource.tags.push(word.trim());
	});
};

const postCntrl = {
	index: (req, res, next) =>{
		const errors = {};

		Post.find({}).populate('author').populate('category', "_id name").sort({createdAt: -1}).then((posts) =>{
			return res.status(200).json(posts);
		}).catch((err) =>{
			errors.msg = err.message;
			return res.status(404).json(errors);
		});
	},

	create: async (req, res, next) =>{
		const { errors, isValid } = validate.newpost(req.body);
		
		if(!isValid){
			return res.status(400).json(errors);
		};
		
		const post = new Post({
			body: req.body.body,
			title: req.body.title,
			author: req.user.id,
			allowComments: req.body.allowComments,
			isMatch: req.body.isMatch,
			postType: req.body.postType,
			matchInfo: {
				score: req.body.score,
				homeTeam: req.body.homeTeam,
				awayTeam: req.body.awayTeam,
				date: req.body.date,
				competition: req.body.competition
			},
			category: req.body.category
		});

		req.files.forEach((img) =>{
			post.photos.push({location: img.location, filename: img.key})
		});

		convertTagStringToArray(post, req.body.tags);
		
		try {
			const newpost = await post.save();
			return res.json(newpost);
		} catch(err){
			return res.status(404).json(err)
		};
	},

	showPost: async (req, res, next) =>{
		const errors = {};
		const { postId } = req.params;

		try{
			const post = await Post.findById(postId).populate("author", "username avatar role location").populate('category', "_id name").exec();
			errors.msg = "Post not found.";
			
			if(!post) return res.status(404).json(errors);
			return res.status(200).json(post);
		} catch(err){
			return res.status(400).json(err);
		};
	},

	update: async (req, res, next) =>{
		const { postId } = req.params;
		const updatedPost = {};
		const errors = {};
		
		if(req.body.title) updatedPost.title = req.body.title;
		if(req.body.body) updatedPost.body = req.body.body;
		if(req.body.tags) updatedPost.tags = req.body.tags;
		if(req.body.isMatch) updatedPost.isMatch = req.body.isMatch;
		if(req.body.allowComment) updatedPost.allowComment = req.body.allowComment;
		if(req.body.homeTeam) updatedPost.homeTeam = req.body.homeTeam;
		if(req.body.awayTeam) updatedPost.awayTeam = req.body.awayTeam;
		if(req.body.date) updatedPost.date = req.body.date;
		if(req.body.score) updatedPost.score = req.body.score;
		if(req.body.competition) updatedPost.competition = req.body.competition;
		if(req.body.postType) updatedPost.postType = req.body.postType;

		try {
			const post = await Post.findById(postId).populate('category', "_id name").exec();
			if(post.author._id.equals(req.user.id)){
				Post.findOneAndUpdate({_id: postId}, {$set: updatedPost}, {new: true}).then((post) =>{
					return res.json(post);
				}).catch((err) => res.status(404).json(err));
			} else {
				errors.msg = "You are not permitted to perform this action.";
				return res.status(401).json(errors);
			};
		} catch(err) {
			console.log(err)
			return res.status(404).json(err);
		}
	},

	delete: async (req, res, next) =>{
		const errors = {};
		const { postId } = req.body;
		const post = await Post.findById(postId).exec();
		
		if(!post) return res.status(404).json("Post not found");
		if(post.author._id.equals(req.user.id)){
			Post.findOneAndRemove({_id: postId}).then((post) =>{
				return res.json(post);
			}).catch((err) => res.status(404).json(err));
		} else {
			errors.msg = "You are not permitted to perform this action.";
			res.status(401).json(errors);
		}
	},

	like: (req, res, next) =>{
		const { postId } = req.params;
		const errors = {};

		Post.findById(postId).populate("author", "username avatar _id location role").then((post) =>{
			const alreadyLiked = post.like.users.map(item => item.toString()).includes(req.user.id);
			if(alreadyLiked){
				errors.msg = "Unable to like same post twice..";
				return res.status(400).json(errors);
			};
			
			post.like.users.push(req.user.id);
			post.like.count += 1;

			post.save().then(post => res.json(post))
		}).catch((err) => {
			errors.msg = "Post not found.";
			return res.status(404).json(errors);
		});
	},

	unlike: (req, res, next) =>{
		const { postId } = req.params;
		const errors = {};

		Post.findById(postId).then((post) =>{
			const alreadyLiked = post.like.users.map(item => item.toString()).includes(req.user.id);
			
			if(!alreadyLiked){
				errors.msg = "You have not yet liked this post.";
				return res.status(400).json(errors);
			};

			post.like.users.filter(user => user.toString() !== req.user.id);
			post.like.count > 0 ? post.like.count -= 1 : post.like.count = 0;

			post.save().then(post => res.json(post))
		}).catch((err) => {
			errors.msg = "Post not found.";
			return res.status(404).json(errors);
		});
	}
};

module.exports = postCntrl;