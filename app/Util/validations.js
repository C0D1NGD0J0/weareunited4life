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
		
		if(Validator.isEmpty(data.email)){
			errors.email = "Email field is required.";
		};

		if(!Validator.isEmail(data.email)){
			errors.email = "Email is invalid.";
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
	}
}

module.exports = validate;