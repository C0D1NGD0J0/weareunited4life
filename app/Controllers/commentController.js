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
		comment.author.id = req.user.id;
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
	},

	delete: (req, res, next) =>{
		const { postId, commentId } = req.params;
		const errors = {};
		

		Comment.findById(commentId).then((comment) =>{
			if(comment.author.id.toString() === req.user.id){
				comment.remove();
				Post.findById(postId).then((post) =>{
					const isCommentIdIncluded = post.comments.map(comm_id => comm_id.toString()).includes(commentId);
					
					if(!isCommentIdIncluded){
						errors.msg = "Comment not found.";
						return res.status(404).json(errors);
					};
					
					let comment = post.comments.filter(item => item.toString() !== commentId );
					post.comments = comment;
					return post.save().then(post => res.json(post));
				}).catch((err) => res.status(400).json(err));
			} else{
				return res.status(401).json("Unauthorized action performed.");
			};
		}).catch((err) => res.status(404).json(err));
	}
};

module.exports = commentCntrl;