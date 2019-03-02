"use strict";
const User = require('../Models/User');
const keys = require("../Config/keys");

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
			return res.status(200).json(user.detailsToJSON());
		} catch(e) {
			errors.msg = "User doesn't exist.";
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
		const isAuthorized = req.user.id.equals(userId);
		
		const { errors, isValid } = validate.updateuser(req.body);
		
		if(!isValid){
			return res.status(400).json(errors);
		};

		try {
			if(isAuthorized){
				updateData.username = req.body.username;
				updateData.email = req.body.email;

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
			return res.status(400).json(err);
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
		const { followId } = req.param;
		errors.msg = "User not found!";

		User.findById(req.user.id).then((user) =>{
			if(!user) return res.status(401).json(errors);
			user.follow(followId).then(() =>{
				return res.json(user.detailsToJSON());
			});
		}).catch((err) => res.status(404).json(err));
	},

	unfollow: (req, res, next) =>{
		const errors = {};
		const { followId } = req.params;

		User.findById(req.user.id).then((user) =>{
			if(!user){
				errors.msg = "User not found!";
				res.status(400).json(errors);
			};

			return user.unfollow(followId).then(() =>{
				return res.status(200).json(user.detailsToJSON());
			});
		}).catch((err) =>{
			return res.status(404).json(err);
		});
	}
};

module.exports = userCntrl;