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
	active: {type: Boolean, default: false},
	activationToken: {type: String, default: ""},
	activationTokenExpires: {type: Date, default: ""},
	passwordResetToken: {type: String, default:""},
	passwordResetExpires: {type: Date, default: ""},
	avatar: {type: String, default: "http://lorempixel.com/400/200/people"}
}, {timestamps: true});

UserSchema.methods.detailsToJSON = function(){
	const userinfo = {
		_id: this._id,
		username: this.username,
		email: this.email,
		avatar: this.avatar
	};

	return userinfo;
};

module.exports = User = mongoose.model("User", UserSchema);