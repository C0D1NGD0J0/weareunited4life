"use strict";
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const GameSchema = new Schema({
	game_date: {type: Date},
	round: String,
	homeTeam: String,
	awayTeam: String,
	status: {type: String, default: 'Not Started'},
	final_score: String,
	firstHalf: {type: String, default: '0'},
	secondHalf: {type: String, default: '0'}
}, {timestamps: true});

const user = mongoose.model("Game", GameSchema);

module.exports = user;