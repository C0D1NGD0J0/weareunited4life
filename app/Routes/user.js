"use strict";
const express = require('express');
const router = express.Router();
const passport = require("passport");
const userCntrl = require("../Controllers/userController");
// passport.authenticate('jwt', {session: false})

router.get("/", userCntrl.index);

router.get("/currentuser", passport.authenticate('jwt', {session: false}), userCntrl.currentuser);

router.get("/:userId", userCntrl.profile);

module.exports = router;