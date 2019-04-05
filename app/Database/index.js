const mongoose = require("mongoose");
const configKeys = require("../Config/keys");
const isProduction = (process.env.NODE_ENV === "production");
mongoose.Promise = global.Promise;

if(isProduction){
	mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true}, function(err){
		if(err) return console.log("Remote Database Error: ", err);
		console.log("Connected to remote database");
	});
} else {
	mongoose.connect(process.env.LOCALDB_URI, {useNewUrlParser: true}, function(err){
		if(err) return console.log("Local Database Error: ", err);
		console.log("Connected to local database");
	});
}

module.exports = mongoose;