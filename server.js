const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const passport = require("passport");
const passportConfig = require("./app/Config/passportConfig");
const bodyParser = require('body-parser');
const PORT = (process.env.PORT || 3000);
const app = express();

// Middleware
dotenv.config();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(bodyParser.urlencoded({extended: false}));

// Passport JWT Config
passportConfig(passport);

// Database Connection
require('./app/Database');

// Models
require('./app/Models/User');
// require('./app/Models/Post');

// Routes
app.use('/api/auth', require('./app/Routes/auth'));
app.use('/api/users', require('./app/Routes/user'));

// Error Handling


// Initialize Server
app.listen(PORT, (err) =>{
	console.log(`Server is live on port ${PORT}`);
});