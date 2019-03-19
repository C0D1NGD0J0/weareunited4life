"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
	author:{
		type: Schema.Types.ObjectId,
		ref: 'User'
	},
	title: {
		type: String,
		required: [true, "Title is required"],
		minlength: 4,
		maxlength: 100
	},
	body: {
		type: String,
		required: [true, "Post body is required"],
		minlength: 2,
		maxlength: 800
	},
	like: {
		count: {type: Number, default: 0},
		users: [{type: Schema.Types.ObjectId, ref: 'User'}]
	},
	tags: [{type: String, required: true}],
	photos: [{	
		location: {type: String, default: "http://lorempixel.com/450/450/?random=456"},
		filename: {type: String}
	}],
	comments:[{type: Schema.Types.ObjectId, ref: "Comment"}],
	allowComments: {type: Boolean, default: false},
	isMatch: {type: Boolean, default: false},
	matchInfo:{
		scores: String,
		homeTeam: String,
		awayTeam: String,
		date: {type: Date, default: ""},
		competition: String
	},
	category: {type: Schema.Types.ObjectId, ref: "Category"},
	type:{type: String, default: 'article', lowercase: true} 
}, {timestamps: true});

const post = mongoose.model("Post", PostSchema);

module.exports = post;