"use strict";
const Validator = require("validator");

function isEmpty(value){
	return(
		value === "undefined" || 
		value === null || 
		(typeof value === "object" && Object.keys(value).length === 0) || 
		(typeof value === "string" && value.trim().length === 0)
	);
};

const validate = {
	registration: (data) =>{
		let errors = {};
		
		data.username = !isEmpty(data.username) ? data.username : "";
		data.email = !isEmpty(data.email) ? data.email : "";
		data.location = !isEmpty(data.location) ? data.location : "";
		data.password = !isEmpty(data.password) ? data.password : "";
		data.password2 = !isEmpty(data.password2) ? data.password2 : "";

		if(!Validator.isLength(data.username, { min: 5, max: 20 })){
			errors.username = `${data.username} must be between 5 and 20 characters.`;
		};
		
		if(Validator.isEmpty(data.username)){
			errors.username = "Username field is required.";
		};

		if(Validator.isEmpty(data.location)){
			errors.location = "Location field is required.";
		};

		if(Validator.isEmpty(data.email)){
			errors.email = "Email field is required.";
		};

		if(!Validator.isEmail(data.email)){
			errors.email = "Email is invalid.";
		};

		if(Validator.isEmpty(data.password)){
			errors.password = "Password field is required.";
		};

		if(!Validator.isLength(data.password, {min: 6, max: 15})){
			errors.password = "Password must be at least 6 characters long.";
		};

		if(Validator.isEmpty(data.password2)){
			errors.password2 = "Confirm Password field is required.";
		};

		if(!Validator.equals(data.password, data.password2)){
			errors.password2 = "Passwords must match.";
		}

		return {errors, isValid: isEmpty(errors)};
	},

	login: (data) =>{
		let errors = {};
		
		data.email = !isEmpty(data.email) ? data.email : "";
		data.password = !isEmpty(data.password) ? data.password : "";
		
		if(!Validator.isEmail(data.email)){
			errors.email = "Email is invalid.";
		};
		
		if(Validator.isEmpty(data.email)){
			errors.email = "Email field is required.";
		};

		if(Validator.isEmpty(data.password)){
			errors.password = "Password field is required.";
		};

		return {errors, isValid: isEmpty(errors)};
	},

	resetEmail: (data) =>{
		const errors = {};

		if(!Validator.isEmail(data.email)){
			errors.email = "Email format is invalid.";
		};

		if(isEmpty(data.email)){
			errors.email = "Email needs to be provided.";
		};

		return {errors, isValid: isEmpty(errors)};
	},

	passwordReset: (data) =>{
		const errors = {};

		data.password = !isEmpty(data.password) ? data.password : "";
		data.password2 = !isEmpty(data.password2) ? data.password2 : "";

		if(Validator.isEmpty(data.password)){
			errors.password = "Password field is required";
		}

		if(!Validator.isLength(data.password, {min: 6, max: 15})){
			errors.password = "Password must be at least 6 characters";
		}

		if(Validator.isEmpty(data.password2)){
			errors.password2 = "Confirm password field is required";
		}

		if(!Validator.equals(data.password, data.password2)){
			errors.password2 = "Passwords must match.";
		}

		return {errors, isValid: isEmpty(errors)}
	},
	
	updateuser: (data) =>{
		let errors = {};
		
		data.username = !isEmpty(data.username) ? data.username : "";
		data.email = !isEmpty(data.email) ? data.email : "";
		data.password = !isEmpty(data.password) ? data.password : "";
		data.password2 = !isEmpty(data.password2) ? data.password2 : "";

		if(!Validator.isLength(data.username, { min: 5, max: 20 })){
			errors.username = `${data.username} must be between 5 and 20 characters.`;
		};
		
		if(Validator.isEmpty(data.username)){
			errors.username = "Username field is required.";
		};

		if(Validator.isEmpty(data.email)){
			errors.email = "Email field is required.";
		};

		if(!Validator.isEmail(data.email)){
			errors.email = "Email is invalid.";
		};
		
		if(data.password){
			if(!Validator.isLength(data.password, {min: 6, max: 15})){
				errors.password = "Password must be at least 6 characters long.";
			};

			if(Validator.isEmpty(data.password2)){
				errors.password2 = "Confirm Updated Password field is required.";
			};

			if(!Validator.equals(data.password, data.password2)){
				errors.password2 = "Passwords must match.";
			}
		};

		return {errors, isValid: isEmpty(errors)};
	},

	newpost: (data) =>{
		const errors = {};

		data.title = !isEmpty(data.title) ? data.title : "";
		data.body = !isEmpty(data.body) ? data.body : "";
		// data.date = !isEmpty(data.date) ? data.date : "";
		data.homeTeam = !isEmpty(data.homeTeam) ? data.homeTeam : "";
		data.category = !isEmpty(data.category) ? data.category : "";
		data.postType = !isEmpty(data.postType) ? data.postType : "";
		data.awayTeam = !isEmpty(data.awayTeam) ? data.awayTeam : "";
		data.competition = !isEmpty(data.competition) ? data.competition : "";

		if(Validator.isEmpty(data.title)){
			errors.title = "Post title is required.";
		};

		if(!Validator.isLength(data.title, {min: 5, max: 100})){
			errors.title = "Title should be between 5 and 100 characters.";
		};
		
		if(Validator.isEmpty(data.body)){
			errors.body = "Post body is required.";
		};

		if(!Validator.isLength(data.body, {min: 2, max: 2000})){
			errors.body = "Post body should be between 2 and 2000 characters.";
		};

		if(Validator.isEmpty(data.tags)){
			errors.tags = "Post tags needs to be provided.";
		};

		if(Validator.isEmpty(data.postType)){
			errors.postType = "Post type needs to be provided.";
		};

		if(Validator.isEmpty(data.category)){
			errors.category = "Post must belong to a category.";
		};

		if(data.isMatch === true){
			if(Validator.isEmpty(data.homeTeam)){
				errors.homeTeam = "Home Team name needs to be provided.";
			};

			if(Validator.isEmpty(data.awayTeam)){
				errors.awayTeam = "Away Team name needs to be provided.";
			};

			if(Validator.isEmpty(data.competition)){
				errors.competition = "Competition name needs to be provided.";
			};
		};

		return { errors, isValid: isEmpty(errors) };
	},

	newcomment: (data) =>{
		const errors = {};

		data.comment = isEmpty(data.comment) ? "" : data.comment;

		if(!Validator.isLength(data.comment, {min: 5, max: 200})){
			errors.comment = "Exceeded comment characters length of 200";
		}

		if(Validator.isEmpty(data.comment)){
			errors.comment = "Comment needs to be provided.";
		}

		return {errors, isValid: isEmpty(errors)};
	},

	category: (data) =>{
		const errors = {};
		data.name = !isEmpty(data.name) ? data.name : "";

		if(Validator.isEmpty(data.name)){
			errors.name = "Category name needs to be provided.";
		};

		if(!Validator.isLength(data.name, {min: 2, max: 20})){
			errors.name = "Category name should be between 2 and 20 characters.";
		};

		return { errors, isValid: isEmpty(errors) };
	}
}

module.exports = validate;