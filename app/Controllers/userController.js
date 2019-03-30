"use strict";
const User = require('../Models/User');
const Post = require('../Models/Post');
const Comment = require('../Models/Comment');
const keys = require("../Config/keys");
const validate = require("../Util/validations");

const userCntrl = {
	index: (req, res, next) =>{
		User.find({}).then((users) =>{
			const usersList = users.map((user) => user.detailsToJSON());
			return res.status(200).json(usersList);
		}).catch((err) => res.status(400).json(err));
	},

	currentuser: async (req, res, next) =>{
		const errors = {};
		
		try {
			const user = await User.findById(req.user.id);
			const posts = await Post.find({author: req.user.id }).populate('category', "name");
			const comments = await Comment.find({"author.id": user._id}).select('post createdAt').populate('post', "title _id");
			
			return res.status(200).json({user: user.detailsToJSON(), posts, comments});
		} catch(err) {
			errors.msg = err.msg;
			return res.status(404).json(errors);
		}		
	},

	profile: async (req, res, next) =>{
		const errors = {};
		const { userId } = req.params;

		try {
			const user = await User.findById(userId);
			return res.status(200).json(user.detailsToJSON());
		} catch(err) {
			errors.msg = "Invalid user search.";
			return res.status(404).json(errors);
		};
	},

	update: async (req, res, next) =>{
		const updateData = {};
		const { userId } = req.params;
		const isAuthorized = req.user._id.equals(userId);		
		const { errors, isValid } = validate.updateuser(req.body);
		
		if(!isValid){
			return res.status(400).json(errors);
		};

		try {
			if(isAuthorized){
				updateData.email = req.body.email;
				updateData.username = req.body.username;
				updateData.location = req.body.location;

				if(req.body.password){
					updateData.password = req.body.password;
				};

				const user = await User.findOneAndUpdate({_id: req.user.id}, {$set: updateData}, {new: true});
					
				return res.status(200).json(user.detailsToJSON())
			} else {
				errors.msg = "You are not permitted to perform this action.";
				return res.status(401).json(errors);
			}
		} catch(err) {
			errors.msg = err.msg;
			return res.status(400).json(errors);
		};
	},

	delete: (req, res, next) =>{
		const errors = {};
		const { userId } = req.params;
		const isAuthorized = req.user.id.equals(userId);

		if(isAuthorized){
			User.findByIdAndRemove(userId).then((user) =>{
				return res.status(200).json(user.detailsToJSON());
			}).catch((err) => {
				errors.msg = err.message;
				return res.status(404).json(errors);
			});
		};
		
		errors.msg = "You are not permitted to perform this action.";
		return res.status(401).json(errors);
	},

	follow: (req, res, next) =>{
		const errors = {};
		const { userId } = req.param;
		errors.msg = "User not found!";
		
		if(!req.user.id.toString() === userId.toString()){
			User.findById(req.user.id).then((user) =>{
				if(!user) return res.status(401).json(errors);
				user.follow(userId).then(() =>{
					return res.json(user.detailsToJSON());
				});
			}).catch((err) => res.status(404).json(err));
		};

		return res.status(400).json("You can't follow yourself.");
	},

	unfollow: (req, res, next) =>{
		const errors = {};
		const { userId } = req.params;

		User.findById(req.user.id).then((user) =>{
			if(!user){
				errors.msg = "User not found!";
				res.status(400).json(errors);
			};

			user.unfollow(userId).then(() =>{
				return res.status(200).json(user.detailsToJSON());
			});
		}).catch((err) =>{
			return res.status(404).json(err);
		});
	}
};

module.exports = userCntrl;