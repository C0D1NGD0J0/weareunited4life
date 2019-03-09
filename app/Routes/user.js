"use strict";
const express = require('express');
const router = express.Router();
const passport = require("passport");
const userCntrl = require("../Controllers/userController");

router.get("/", userCntrl.index);

router.get("/currentuser", passport.authenticate('jwt', {session: false}), userCntrl.currentuser);

router.get("/:userId/profile", passport.authenticate('jwt', {session: false}), userCntrl.profile);

router.put("/:followId/follow", passport.authenticate('jwt', {session: false}), userCntrl.follow);

router.delete("/:followId/unfollow", passport.authenticate('jwt', {session: false}), userCntrl.follow);


module.exports = router;