"use strict";
const express = require('express');
const router = express.Router();
const postController = require("../Controllers/postcontroller");

router.get("/", postController.index);

module.exports = router;