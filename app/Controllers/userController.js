"use strict";
const User = require('../Models/User');
const Post = require('../Models/Post');
const Comment = require('../Models/Comment');
const keys = require("../Config/keys");
const validate = require("../Util/validations");
const ObjectID = require('mongodb').ObjectID;

function paginateResult(count, offset, limit) {
  const paginatedResult = {};
  paginatedResult.currentPage = Math.floor(offset / limit) + 1;
  paginatedResult.pageCount = Math.ceil(count / limit);
  paginatedResult.pageSize = Number(limit);
  paginatedResult.totalCount = count;

  return paginatedResult;
};

const userCntrl = {
	index: (req, res, next) =>{
		User.find({}).then((users) =>{
			const usersList = users.map((user) => user.detailsToJSON());
			return res.status(200).json(usersList);
		}).catch((err) => res.status(400).json(err));
	},

	currentuser: async (req, res, next) =>{
		const errors = {};
		let { page, limit } = req.query;
		page = Number(page) || 1;
		limit = Number(limit) || 5;
		const offset =  (page - 1)*limit;


		try {
			const user = await User.findById(req.user.id).populate('following', "username avatar _id");
			const posts = await Post.find({author: req.user.id }).populate('category', "name").skip(offset).limit(limit);
			const count = await Post.countDocuments().exec();
			const comments = await Comment.find({"author.id": user._id}).select('post createdAt').populate('post', "title _id");

			
			const pagination = paginateResult(count,offset, limit);
			return res.status(200).json({user: user.detailsToJSON(), posts, comments, pagination});
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

	deleteAcct: (req, res, next) =>{
		const errors = {};
		const userId  = new ObjectID(req.params.userId);
		const isAuthorized = new ObjectID(req.user.id).equals(userId);
		
		if(!isAuthorized){
			errors.msg = "You are not permitted to perform this action.";
			return res.status(401).json(errors);
		};

		User.findOneAndDelete({_id: userId}).then((user) =>{
			res.status(200).json(user.detailsToJSON());
		}).catch((err) => {
			errors.msg = err.message;
			return res.status(404).json(errors);
		});
	},

	follow: (req, res, next) =>{
		const errors = {};
		const followId = req.params.userId;
		errors.msg = "User not found!";
	
		if(req.user.id.toString() !== followId.toString()){
			User.findById(req.user.id).populate('user').then((user) =>{
				if(!user) return res.status(401).json(errors);
				if(!user.isFollowing(followId)){
					user.follow(followId).then(() =>{
						return res.json(user.detailsToJSON());
					});
				} else {
					return res.status(400).json("You are already following this user.");
				};
			}).catch((err) => res.status(404).json(err));
		} else {
			return res.status(400).json("You can't follow yourself.");
		};
	},

	unfollow: (req, res, next) =>{
		const errors = {};
		const followId = req.params.userId;

		User.findById(req.user.id).then((user) =>{
			if(!user){
				errors.msg = "User not found!";
				res.status(400).json(errors);
			};
			
			if(user.isFollowing(followId)){
				user.unfollow(followId).then(() =>{
					return res.status(200).json(user.detailsToJSON());
				});
			} else {
				return res.status(404).json("You currently aren't following this user.");
			};
		}).catch((err) =>{
			return res.status(404).json(err);
		});
	}
};

module.exports = userCntrl;