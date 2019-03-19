const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const cors = require('cors');
const passport = require("passport");
const passportConfig = require("./app/Config/passportConfig");
const bodyParser = require('body-parser');
const PORT = (process.env.PORT || 5000);
const app = express();
const corsOptions = {
	origin: '*',
	optionsSuccessStatus: 200
};

// Middleware
dotenv.config();
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(bodyParser.urlencoded({extended: false}));

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

// Error Handling

// Initialize Server
app.listen(PORT, (err) =>{
	console.log(`Server is live on port ${PORT}`);
});