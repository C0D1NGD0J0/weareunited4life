const User = require('../Models/User');
const Post = require('../Models/Post');
const validate = require("../Util/validations");

const postCntrl = {
	index: (req, res, next) =>{
		const errors = {};

		Post.find({}).sort({date: -1}).then((posts) =>{
			return res.status(200).json(posts);
		}).catch((err) =>{
			errors.msg = err.message;
			return res.status(404).json(errors);
		});
	},

	create: (req, res, next) =>{
		const { errors, isValid } = validate.newpost(req.body);
		
		if(!isValid){
			return res.status(400).json(errors);
		};

		const newpost = new Post({
			text: req.body.text,
			title: req.body.title,
			tags: req.body.tags,
			author: req.user.id
		});
		
		newpost.save()
			.then((post) => res.status(200).json(post))
			.catch((err) => res.status(404).json(err));
	},

	show: async (req, res, next) =>{
		const errors = {};
		const { postId } = req.params;

		try{
			const post = await Post.findById(postId);
			errors.msg = "Post not found.";
			
			if(!post) return res.status(404).json(errors);
			return res.status(200).json(post);
		} catch(err){
			return res.status(400).json(err);
		};
	},

	update: (req, res, next) =>{

	},

	delete: (req, res, next) =>{
		
	}
};

module.exports = postCntrl;