"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("./User");

const MessageSchema = new Schema({
	body: {
		type: String,
		trim: true,
		minlength: 2,
		maxlength: 150,
		required: [true, "message can't be blank"]
	},
	user: {
		type: Schema.Types.ObjectId,
		ref: "User"
	}
}, {timestamps: true});

MessageSchema.pre('remove', async function(next){
	try {
		// find a user
		let user = await User.findById(this.user);
		// remove id of mesage from their messages list
		user.messages.remove(this.id);
		// save user
		await user.save();
		// return next
		return next();
	} catch(err) {
		return next(err);
	};
});

const message = mongoose.model("Message", MessageSchema);
module.exports = message;