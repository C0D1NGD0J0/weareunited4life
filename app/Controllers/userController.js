"use strict";
const User = require('../Models/User');
const keys = require("../Config/keys");

const userCntrl = {
	currentuser: (req, res, next) =>{
		res.json(req.user.detailsToJSON());
	}
};

module.exports = userCntrl;