"use strict";
const express = require('express');
const router = express.Router();
const passport = require("passport");
const userCntrl = require("../Controllers/userController");

router.get("/", passport.authenticate('jwt', {session: false}), userCntrl.index);

router.put("/:followId/follow", passport.authenticate('jwt', {session: false}), userCntrl.follow);

router.get("/currentuser", passport.authenticate('jwt', {session: false}), userCntrl.currentuser);

router.get("/:userId", passport.authenticate('jwt', {session: false}), userCntrl.profile);

router.delete("/:followId/unfollow", passport.authenticate('jwt', {session: false}), userCntrl.follow);

module.exports = router;