const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const passport = require("passport");
const bodyParser = require('body-parser');
const PORT = (process.env.PORT || 5000);
const app = express();
const path = require("path");
const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
};

// Middleware
dotenv.config();
const passportConfig = require("./app/Config/passportConfig");
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());

// Passport JWT Config
passportConfig(passport);

// Database Connection
require('./app/Database');
// require('./app/Database/seed');

// Models
require('./app/Models/User');
require('./app/Models/Post');
require('./app/Models/Category');
require('./app/Models/Comment');

// Routes
app.use('/api/auth', require('./app/Routes/auth'));
app.use('/api/users', require('./app/Routes/user'));
app.use('/api/posts', require('./app/Routes/post'));
app.use('/api/categories', require('./app/Routes/category'));
app.use('/api/', require('./app/Routes/comment'));

// Serve static assets if in production env
if(process.env.NODE_ENV === 'production'){
	// set static folder
	app.use(express.static('client/build'));
	app.get("*", (req, res, next) =>{
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
};

// Error Handling TODO

// Initialize Server
app.listen(PORT, (err) =>{
	console.log(`Server is live on port ${PORT}`);
});