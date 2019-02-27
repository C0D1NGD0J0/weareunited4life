"use strict";
const Post = require('../Models/Post');
const Comment = require('../Models/Comment');
const validate = require("../Util/validations");

const commentCntrl = {
	create: async (req, res, next) =>{
		const { postId } = req.params;
		const { errors, isValid } = validate.newcomment(req.body);
		
		if(!isValid){
			return res.status(400).json(errors);
		};
		
		const comment = new Comment();
		comment.body = req.body.comment;
		comment.author._id = req.user.id;
		comment.author.username = req.user.username;
		comment.author.avatar = req.user.avatar;
		comment.post = postId;
		
		try {
			const post = await Post.findById(postId);
			if(!post) return res.status(404).json("Post not found");

			const savedComment = await comment.save();
			post.comments.push(savedComment);
			await post.save();
			return res.json(savedComment);
		} catch(err){
			errors.msg = err.message;
			return res.status(400).json(errors);
		};
	}
};

module.exports = commentCntrl;