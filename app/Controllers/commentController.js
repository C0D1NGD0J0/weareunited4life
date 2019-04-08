"use strict";
const Post = require('../Models/Post');
const Comment = require('../Models/Comment');
const validate = require("../Util/validations");
const socketIOClient = require("socket.io-client");
const socket = socketIOClient("http://localhost:5000")

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
			const post = await Post.findById(postId).populate("author", "username avatar role location").populate('category', "_id name").populate('comments').exec();

			if(!post) return res.status(404).json("Post not found");

			const savedComment = await comment.save();
			post.comments.push(savedComment);
			const savedPost = await post.save();
			socket.emit("notifyCommentAdded",savedPost)
			return res.json(savedPost);
		} catch(err){
			errors.msg = err.message;
			return res.status(400).json(errors);
		};
	},

	delete: (req, res, next) =>{
		const { postId, commentId } = req.params;
		const errors = {};

		Comment.findById(commentId).then((commentz) =>{
			if(commentz.author.id.equals(req.user.id)){
				Post.findById(postId)
					.populate("author", "username avatar role location")
					.populate('category', "_id name")
					.populate('comments').then((post) =>{
						const isCommentIdIncluded = post.comments.map(comm => comm._id.toString()).includes(commentId.toString());
						
						if(!isCommentIdIncluded){
							errors.msg = "Comment not found.";
							return res.status(404).json(errors);
						};
						
						commentz.remove(); //delete comment from comments table
						let filteredComments = post.comments.filter(item => item._id.toString() !== commentId.toString());
						post.comments = filteredComments;
						return post.save().then(post =>{
							socket.emit("notifyCommentAdded", post);
							return res.json(post);
						});
				}).catch((err) => res.status(400).json(err));
			} else{
				return res.status(401).json("Unauthorized action performed.");
			};
		}).catch((err) => res.status(404).json(err));
	}
};

module.exports = commentCntrl;