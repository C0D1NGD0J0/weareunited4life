"use strict";
const express = require('express');
const router = express.Router();
const passport = require("passport");
const userCntrl = require("../Controllers/userController");

router.get("/currentuser", passport.authenticate('jwt', {session: false}), userCntrl.currentuser);

module.exports = router;