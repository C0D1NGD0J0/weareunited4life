"use strict";
const express = require('express');
const router = express.Router();
const passport = require("passport");
const categoryCntrl = require("../Controllers/categoryController");

router.get("/", passport.authenticate('jwt', {session: false}), categoryCntrl.all);

router.post("/", passport.authenticate('jwt', {session: false}), categoryCntrl.create);

router.put("/:categoryId", passport.authenticate('jwt', {session: false}), categoryCntrl.update);

router.delete("/:categoryId", passport.authenticate('jwt', {session: false}), categoryCntrl.delete);

module.exports = router;