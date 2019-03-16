"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	name: {
		type: String,
		trim: true,
		minlength: 2,
		maxlength: 15,
		unique: true,
		required: [true, "Category name can't be blank"]
	}
}, {timestamps: true});

const category = mongoose.model("Category", CategorySchema);

module.exports = category;