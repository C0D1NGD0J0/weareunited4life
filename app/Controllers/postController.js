const User = require('../Models/User');
const Post = require('../Models/Post');

const postCntrl = {
	index: (req, res, next) =>{
		const errors = {};

		Post.find({}).then((posts) =>{
			return res.status(200).json(posts);
		}).catch((err) =>{
			errors.msg = err.message;
			return res.status(404).json(errors);
		});
	}
};

module.exports = postCntrl;