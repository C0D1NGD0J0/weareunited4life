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
		minlength: 5,
		maxlength: 200
	},
	likes: {
		count: {type: Number, default: 0},
		users: [{type: Schema.Types.ObjectId, ref: 'User'}]
	},
	tags: [{type: String, required: true}],
	photos: [{String}]
}, {timestamps: true});

const post = mongoose.model("Post", PostSchema);

module.exports = post;