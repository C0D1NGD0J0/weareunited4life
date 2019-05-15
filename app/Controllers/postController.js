const User = require('../Models/User');
const Post = require('../Models/Post');
const validate = require("../Util/validations");
const _ = require("lodash");
const Filter = require("bad-words");
const customFilter = new Filter({ placeholder: '!'});

const convertTagStringToArray = function(resource, str){
	// str = str.toLowerCase().replace(/,/g, "").split(" ");
	str = str.toLowerCase().split(" ").filter(() => true);
	_.uniq(str).forEach((word) =>{
		resource.tags.push(word.trim());
	});
};

function paginateResult(count, offset, limit) {
  const paginatedResult = {};
  paginatedResult.currentPage = Math.floor(offset / limit) + 1;
  paginatedResult.pageCount = Math.ceil(count / limit);
  paginatedResult.pageSize = Number(limit);
  paginatedResult.totalCount = count;

  return paginatedResult;
};

const postCntrl = {
	index: (req, res, next) =>{
		const errors = {};
		let { page, limit } = req.query;
		page = Number(page) || 1;
		limit = Number(limit) || 5;
		const offset = ((limit * page) - limit);

		Post.find({})
			.skip(offset)
			.limit(limit)
			.populate('author')
			.populate("comments")
			.populate('category', "_id name")
			.sort({createdAt: -1}).then((posts) =>{
				Post.count().then((count) =>{
					return res.status(200).json({posts, hasMorePosts: (count - (page * limit) > 0)});
				})
		}).catch((err) =>{
			errors.msg = err.message;
			return res.status(404).json(errors);
		});
	},

	feed: async (req, res, next) =>{
		const errors = {};
		let { page, limit } = req.query;
		page = Number(page) || 1;
		limit = Number(limit) || 5;
		const offset = ((limit * page) - limit);
		
		const user = await User.findById(req.user.id).exec();
		const count = await Post.countDocuments({author: { $in: user.following }}).exec();
		const feeds = await Post.find({author: { $in: user.following }}).skip(offset).limit(limit).populate('author', "username").populate('category', "name").sort({createdAt: -1}).exec();
		const pagination = paginateResult(count, offset, limit);

		return res.status(200).json({feeds, pagination});
	},

	create: async (req, res, next) =>{
		const { errors, isValid } = validate.newpost(req.body);
		
		if(!isValid){
			return res.status(400).json(errors);
		};
		
		const post = new Post({
			body: customFilter.clean(req.body.body.toString().trim()),
			title: customFilter.clean(req.body.title.toString().trim()),
			author: req.user.id,
			allowComments: req.body.allowComments,
			isMatch: req.body.isMatch,
			type: req.body.postType,
			category: req.body.category
		});

		if(req.files && req.files.length > 0){
			const photoArr = _.uniqWith(req.files, _.isEqual);
			photoArr.forEach((img) =>{
				post.photos.push({location: img.location, filename: img.key, size: img.size});
			});
		};

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
			const post = await Post.findById(postId).populate("author", "username avatar role location").populate('category', "_id name").populate("comments").exec();
			
			errors.msg = "Post not found.";
			post.tags.length > 0 ? post.tags.join(" ") : post.tags;
			
			if(!post) return res.status(404).json(errors);
			return res.status(200).json(post);
		} catch(err){
			return res.status(400).json(err);
		};
	},

	update: async (req, res, next) =>{
		try{
			const { errors, isValid } = validate.newpost(req.body);
			const { postId } = req.params;
			const post = await Post.findById(postId).exec();
			const updatedPost = {
				photos: [...post.photos]
			};

			if(!isValid){
				return res.status(400).json(errors);
			};

			if(req.body.title) updatedPost.title = customFilter.clean(req.body.title.toString().trim());
			if(req.body.body) updatedPost.body = customFilter.clean(req.body.body.toString().trim());
			
			if(req.files && req.files.length > 0){
				const photosArray = _.uniqWith(req.files, _.isEqual);
				photosArray.forEach((img) =>{
					updatedPost.photos.push({location: img.location, filename: img.key, size: img.size});
				});
			};

			if(req.body.tags) {
				updatedPost.tags = [];
				convertTagStringToArray(updatedPost, req.body.tags)
			};

			if(req.body.isMatch) updatedPost.isMatch = req.body.isMatch;
			if(req.body.allowComments) updatedPost.allowComments = req.body.allowComments;
			if(req.body.category) updatedPost.category = req.body.category;
			if(req.body.postType) updatedPost.type = req.body.postType;
			
			if(post.author._id.equals(req.user.id)){
				Post.findOneAndUpdate({_id: postId}, {$set: updatedPost}, {new: true}).then((post) =>{
					return res.json(post);
				}).catch((err) => res.status(404).json(err));
			} else {
				errors.msg = "You are not permitted to perform this action.";
				return res.status(401).json(errors);
			};
		} catch(err) {
			const errors = {};
			errors.msg = err.msg;
			return res.status(404).json(errors);
		};
	},

	delete: async (req, res, next) =>{
		const errors = {};
		const { postId } = req.params;
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
		
		Post.findOneAndUpdate({_id: postId}, {$inc: {"like.count": 1}, $push: {"like.users": req.user.id}}, {new: true})
			.populate("author", "username avatar _id location role")
			.populate("comments")
			.populate('category', "_id name").then((post) =>{
				return res.status(200).json(post);
			}).catch((err) => {
				errors.msg = "Post not found.";
				return res.status(404).json(errors);
			});
	},

	unlike: (req, res, next) =>{
		const { postId } = req.params;
		const errors = {};

		Post.findOneAndUpdate({_id: postId}, {$inc: {"like.count": -1}, $pull: {"like.users": req.user.id}}, {new: true})
			.populate("author", "username avatar _id location role")
			.populate("comments")
			.populate('category', "_id name")
			.then((post) =>{
				return res.json(post);
		}).catch((err) => {
			errors.msg = "Post not found.";
			return res.status(404).json(errors);
		});
	},

	tags: async (req, res, next) =>{
		const tags = await Post.getAllTags();
		return res.status(200).json(tags);
	},

	postsByTag: async (req, res, next) =>{
		const { tag } = req.params;
		
		Post.find({tags: { "$all": [tag]}}).then((posts) =>{
			return res.json(posts);
		}).catch((err) =>{
			return res.status(400).json(err);
		});
	},

	deleteImages: (req, res, next) =>{
		const { filename } = req.query;
		const { postId } = req.params;
		
		Post.findOneAndUpdate({_id: postId}, { $pull: { photos: { filename: filename }}}, {new: true})
			.then((post) =>{
				return res.json(post);
			}).catch((err) =>{
				return res.status(404).json(err);
			});
	},

	postsByCategory: async (req, res, next) =>{
		let { categoryId, page, limit } = req.query;
		page = Number(page) || 1;
		limit = Number(limit) || 5;
		const offset = ((limit * page) - limit);
		
		try {
			const posts = await Post.find({category: categoryId}).skip(offset).limit(limit).sort({createdAt: -1}).populate('category', "_id name");
			const count = await Post.find({category: categoryId}).countDocuments();
			
			return res.status(200).json({posts, total: count, hasMorePosts: count - (page * limit) > 0});
		} catch(e) {
			return res.status(400).json(e);
		};
	}
};

module.exports = postCntrl;