"use strict";
const express = require('express');
const router = express.Router();
const passport = require("passport");
const commentCntrl = require("../Controllers/commentController");

router.post("/posts/:postId/comments", 
	passport.authenticate('jwt', {session: false}), 
	commentCntrl.create
);

// router.delete("posts/:postId/comments/:commentId", 
// 	passport.authenticate('jwt', {session: false}), 
// 	commentCntrl.delete
// );

module.exports = router;