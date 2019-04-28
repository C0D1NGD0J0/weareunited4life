"use strict";
const express = require('express');
const router = express.Router();
const passport = require("passport");
const userCntrl = require("../Controllers/userController");
const msgCntrl = require("../Controllers/messageController");

router.get("/", userCntrl.index);

router.get("/currentuser", passport.authenticate('jwt', {session: false}), userCntrl.currentuser);

router.get("/:receiverId/messages", passport.authenticate('jwt', {session: false}), msgCntrl.index );

router.get("/:userId/profile", passport.authenticate('jwt', {session: false}), userCntrl.profile);

router.put("/:userId", passport.authenticate('jwt', {session: false}), userCntrl.update);

router.put("/:userId/follow", passport.authenticate('jwt', {session: false}), userCntrl.follow);

router.put("/:userId/unfollow", passport.authenticate('jwt', {session: false}), userCntrl.unfollow);

router.post("/:receiverId/messages", passport.authenticate('jwt', {session: false}), msgCntrl.create);

router.delete("/:userId", passport.authenticate('jwt', {session: false}), userCntrl.deleteAcct);

module.exports = router;