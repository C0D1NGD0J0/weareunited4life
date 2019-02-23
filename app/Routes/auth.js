"use strict";
const express = require('express');
const router = express.Router();
const authCntrl = require("../Controllers/authController");

router.post("/register", authCntrl.register);

router.post("/login", authCntrl.login);

module.exports = router;
