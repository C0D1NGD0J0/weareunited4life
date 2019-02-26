"use strict";
const express = require('express');
const router = express.Router();
const passport = require("passport");
const postController = require("../Controllers/postcontroller");

router.get("/", passport.authenticate('jwt', {session: false}), postController.index);

router.post("/", passport.authenticate('jwt', {session: false}), postController.create);

module.exports = router;