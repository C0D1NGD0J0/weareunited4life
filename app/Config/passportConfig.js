"use strict";

const keys = require("./keys");
const User = require("../Models/User");
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secret;

module.exports = (passport) =>{
	passport.use(new JwtStrategy(opts, function(jwt_payload, done) {
    User.findById(jwt_payload.id).then(user =>{
    	if(user) return done(null, user);
    	return done(null, false);
    }).catch((err) => console.log(err));
	}));
};