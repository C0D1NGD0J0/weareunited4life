const User = require('../Models/User');
const Post = require('../Models/Post');
const validate = require("../Util/validations");

const postCntrl = {
	index: (req, res, next) =>{
		const errors = {};

		Post.find({}).then((posts) =>{
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
	}
};

module.exports = postCntrl;