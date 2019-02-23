"use strict";
const User = require('../Models/User');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const keys = require("../Config/keys");

const authCntrl = {
	register: (req, res, next) =>{
		User.findOne({ email: req.body.email }).then(user =>{
			if(user){
				return res.status(400).json({ error:{ email: "Email already exists" } });
			} else {
				const newUser = new User({
					email: req.body.email,
					username: req.body.username,
					password: req.body.password
				});

				bcrypt.genSalt(10, (err, salt) =>{
					bcrypt.hash(newUser.password, salt, (err, hash) =>{
						if(err) throw err;
						newUser.password = hash;
						newUser.save().then(user => res.json(user)).catch(err => console.log(err));
					});
				});
			}
		})
	},

	login: (req, res, next) =>{
		const email = req.body.email;
		const password = req.body.password;

		User.findOne({ email }).then((user) =>{
			if(!user){
				return res.status(404).json({ error:{ email: "User not found!" } });
			};

			bcrypt.compare(password, user.password).then((isMatch) => {
				if(isMatch){
					const payload = { id: user.id, username: user.username, avatar: user.avatar };

					jwt.sign(payload, keys.secret, { expiresIn: 3600 }, (err, token) =>{
						res.status(200).json({token: `Bearer ${token}`})
					});
				} else {
					return res.status(400).json({ error: {password: "Password incorrect!"} });
				}
			})
		})
	}
};

module.exports = authCntrl;