"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CommentSchema = new Schema({
	body: {
		type: String,
		trim: true,
		minlength: 2,
		maxlength: 250,
		required: [true, "comment can't be blank"]
	},
	author: {
		id:{
			type: Schema.Types.ObjectId,
			ref: "User"
		},
		username: String,
		avatar: String
	},
	post: {
		type: Schema.Types.ObjectId,
		ref: "Post"
	}
}, {timestamps: true});

const comment = mongoose.model("Comment", CommentSchema);

module.exports = comment;