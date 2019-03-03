"use strict";
const express = require('express');
const router = express.Router();
const authCntrl = require("../Controllers/authController");

router.post("/signup", authCntrl.signup);

router.get("/account_activation/:token", authCntrl.accountActivation);

router.post("/login", authCntrl.login);

router.post("/forgot_password", authCntrl.forgotPwd);

router.post("/reset_password/:token", authCntrl.resetPwd);

module.exports = router;
