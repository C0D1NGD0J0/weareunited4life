"use strict";
const express = require('express');
const router = express.Router();
const Game = require("../Models/Game");
const gameData = require("../Config/soccerAPI");

router.get("/", async function(req, res, next){
	await res.status(200).json(gameData[0]);
});

module.exports = router;