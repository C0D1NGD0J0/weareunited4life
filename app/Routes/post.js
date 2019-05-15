"use strict";
const express = require('express');
const router = express.Router();
const passport = require("passport");
const postCntrl = require("../Controllers/postController");
const {uploadImg, deleteImg} = require("../Controllers/upload");

router.get("/", postCntrl.index);

router.get("/tags", postCntrl.tags);

router.get("/tags/:tag", postCntrl.postsByTag);

router.get("/category", postCntrl.postsByCategory);

router.get("/feed", passport.authenticate('jwt', {session: false}), postCntrl.feed);

router.get("/:postId", postCntrl.showPost);

router.post("/", passport.authenticate('jwt', {session: false}), uploadImg, postCntrl.create);

router.put("/:postId/like", passport.authenticate('jwt', {session: false}), postCntrl.like);

router.put("/:postId/unlike", passport.authenticate('jwt', {session: false}), postCntrl.unlike);

router.put("/:postId", passport.authenticate('jwt', {session: false}), uploadImg, postCntrl.update);

router.put("/:postId/photos/", passport.authenticate('jwt', {session: false}), postCntrl.deleteImages);

router.delete("/:postId", passport.authenticate('jwt', {session: false}), postCntrl.delete);

module.exports = router;