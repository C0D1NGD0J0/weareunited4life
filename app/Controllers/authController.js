"use strict";
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const keys = require("../Config/keys");
const User = require('../Models/User');
const nodemailer = require("nodemailer");
const waterfall = require("async-waterfall");
const validate = require("../Util/validations");
const crypto = require("crypto");

const authCntrl = {
	register: async (req, res, next) =>{
		const { errors, isValid } = validate.registration(req.body);
		
		if(!isValid){
			return res.status(400).json(errors);
		};

		const existingUser = await User.findOne({ email: req.body.email });
		if(existingUser){
			errors.email = "Email already taken!";
			return res.status(403).json(errors);
		};
		
		const newUser = await new User({
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
	},

	login: (req, res, next) =>{
		const { errors, isValid } = validate.login(req.body);
		
		if(!isValid){
			return res.status(400).json(errors);
		};

		const email = req.body.email;
		const password = req.body.password;

		User.findOne({ email }).then((user) =>{
			if(!user){
				errors.email = "User not found!";
				return res.status(404).json(errors);
			};

			bcrypt.compare(password, user.password).then((isMatch) => {
				if(isMatch){
					const payload = { id: user.id, username: user.username, avatar: user.avatar };

					jwt.sign(payload, keys.secret, { expiresIn: 3600 }, (err, token) =>{
						res.status(200).json({token: `Bearer ${token}`})
					});
				} else {
					errors.password = "Password incorrect!";
					return res.status(400).json(errors);
				}
			})
		})
	},

	forgotPwd: (req, res, next) =>{
		const { errors, isValid } = validate.resetEmail(req.body);
		
		if(!isValid){
			return res.status(400).json(errors);
		};

		waterfall([
			function(cb){
				crypto.randomBytes(15, (err, buff) =>{
					const token = buff.toString('hex');
					cb(err, token);
				})
			},

			function(token, cb){
				User.findOne({ email: req.body.email }, (err, user) =>{
					if(!user){
						errors.email = "Invalid Email Provided."
						return res.status(404).json(errors);
					};

					user.passwordResetToken = token;
					user.passwordResetExpires = Date.now() + 7200000; //2hrs
					user.save((err) => cb(err, token, user));
				});
			},

			function(token, user, cb){
				const transport = nodemailer.createTransport({
					service: "Gmail",
					auth: {
						user: process.env.GMAIL_ADDRESS,
						pass: process.env.GMAIL_PASSWORD
					}
				});

				const mailOptions = {
					to: user.email,
					from: "UnitedFanForum",
					subject: "Password Reset",
					text: "You are receiving this email because you (or someone else) has requested to reset your password on UnitedFanForum. \n\n " +
						"Please click on the link to complete the process: \n\n " + 
						`http://${req.headers.host}/reset/${token} \n\n ` +
						"If you didn't request this, please kindly ignore this email and your password will remain unchanged"
				};

				transport.sendMail(mailOptions, function(err){
					if(!err){
						console.log("Mail has been sent");
						return res.status(200)
							.json("Mail has been sent, kindly check your email for further instructions.");
					};
					return cb(err, user);
				});
			}
		], function(err){
			if(err) return res.status(404).json(err);
		});
	},

	resetPwd: (req, res, next) =>{
		const { token } = req.params;
		const { errors, isValid } = validate.passwordReset(req.body);
		
		if(!isValid){
			return res.status(400).json(errors);
		};

		User.findOne({
			passwordResetToken: token, 
			passwordResetExpires: {$gt: Date.now()}}, (err, user) =>{
				if(!user || err) {
					return res.status(404).json({error: "invalid reset token, please generate a new token."});
				};

				user.password = bcrypt.hashSync(req.body.password, 10);
				user.passwordResetToken = "";
				user.passwordResetExpires = "";
				
				user.save()
					.then(() => res.json("Password reset was successful."))
					.catch((err) => res.status(404).json({error: err}));
		});
	}
};

module.exports = authCntrl;