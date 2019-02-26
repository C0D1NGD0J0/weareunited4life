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
		const user = await User.findById(req.user.id);

		if(!user){
			errors.msg = "User doesn't exist.";
			return res.status(404).json(errors);
		};

		return res.status(200).json(user);
	},

	profile: async (req, res, next) =>{
		const { userId } = req.params;
		const user = await User.findById(userId);

		if(!user || err){
			const errors = {};
			errors.msg = "Invalid user search.";
			return res.status(404).json(errors);
		};

		return res.status(200).json(user.detailsToJSON());
	},

	update: async (req, res, next) =>{
		const updateData = {};
		const { userId } = req.params;
		const isAuthorized = req.user.id.equals(userId);
		
		const { errors, isValid } = validate.updateuser(req.body);
		
		if(!isValid){
			return res.status(400).json(errors);
		};

		if(isAuthorized){
			updateData.username = req.body.username;
			updateData.email = req.body.email;

			if(req.body.password){
				updateData.password = req.body.password;
			};

			const updatedData = await User.findOneAndUpdate({_id: req.user.id}, {$set: updateData}, {new: true});
				
			updatedData.then((user) => res.status(200).json(user.detailsToJSON()))
				.catch((err) => res.status(400).json(err));
		};
		
		errors.msg = "You are not permitted to perform this action.";
		return res.status(401).json(errors);
	},

	delete: (req, res, next) =>{
		const errors = {};
		const { userId } = req.params;
		const isAuthorized = req.user.id.equals(userId);

		if(isAuthorized){
			User.findByIdAndRemove(userId).then((user) =>{
				return res.status(200).json(user);
			}).catch((err) => {
				errors.msg = err.message;
				return res.status(404).json(errors);
			});
		};
		
		errors.msg = "You are not permitted to perform this action.";
		return res.status(401).json(errors);
	}
};

module.exports = userCntrl;