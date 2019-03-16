"use strict";
const Category = require('../Models/Category');
const validate = require("../Util/validations");

const categoryCntrl = {
	all: (req, res, next) =>{
		const errors = {};

		Category.find().then((categories) =>{
			return res.json(categories);
		}).catch((err) =>{
			errors.msg = err.msg;
			return res.status(404).json(errors);
		});
	},

	create: async (req, res, next) =>{
		const { errors, isValid } = validate.category(req.body);
		
		if(!isValid){
			return res.status(400).json(errors);
		};
		
		const category = new Category({name: req.body.name});
				
		try {
			const savedCategory = await category.save();
			return res.json(savedCategory);
		} catch(err){
			errors.msg = err.message;
			return res.status(400).json(errors);
		};
	},

	update: (req, res, next) =>{
		const { categoryId } = req.params;
		const errors = {};

		Category.findByIdAndUpdate(categoryId).then((category) =>{
			return res.status(200).json(category);
		}).catch((err) =>{
			errors.msg = err.msg;
			return res.status(404).json(errros);
		});
	},

	delete: (req, res, next) =>{
		const { postId, categoryId } = req.params;
		const errors = {};

		Category.findByIdAndRemove(categoryId).then((category) =>{
			return res.json({success: "Category has been deleted."});
		}).catch((err) =>{
			errors.msg = err.msg;
			res.status(401).json(errors);
		});
	}
};

module.exports = categoryCntrl;