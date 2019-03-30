"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	username: {
		trim: true,
		unique: true,
		type: String,
		maxlength: 20,
		minlength: 5,
		required: [true, 'Username is required!']
	},
	email: {
		trim: true,
		type: String,
		index: true,
		lowercase: true,
		required: [true, "Email is required!"]
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	},
	location: String,
	following: [{type: Schema.Types.ObjectId, ref: 'User'}],
	active: {type: Boolean, default: false},
	activationToken: {type: String, default: ""},
	activationTokenExpires: {type: Date, default: ""},
	passwordResetToken: {type: String, default:""},
	passwordResetExpires: {type: Date, default: ""},
	role: {type: String, default: "guest", lowercase: true},
	avatar: {type: String, default: "http://lorempixel.com/400/200/people"}
}, {timestamps: true});

UserSchema.methods.detailsToJSON = function(){
	const userinfo = {
		_id: this._id,
		username: this.username,
		email: this.email,
		avatar: this.avatar,
		location: this.location,
		role: this.role,
		followingList: this.following,
		following: function(user){
			return (user ? user.isFollowing(this._id) : false);
		}
	};

	return userinfo;
};

UserSchema.methods.follow = function(id){
	if(!this.following.includes(id)){
		this.following.unshift(id);
	};

	return this.save();
}

UserSchema.methods.unfollow = function(id){
	this.following.remove(id);
	return this.save();
};

UserSchema.methods.isFollowing = function(id){
	return this.following.some(function(followid){
		return id.toString() === followid.toString();
	});
};

const user = mongoose.model("User", UserSchema);
module.exports = user;