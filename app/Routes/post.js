"use strict";
const express = require('express');
const router = express.Router();
const passport = require("passport");
const postController = require("../Controllers/postcontroller");

router.get("/", passport.authenticate('jwt', {session: false}), postController.index);

router.get("/:postId", postController.show);

router.put("/:postId", passport.authenticate('jwt', {session: false}), postController.update);

router.post("/", passport.authenticate('jwt', {session: false}), postController.create);

router.delete("/:postId", passport.authenticate('jwt', {session: false}), postController.delete);

module.exports = router;