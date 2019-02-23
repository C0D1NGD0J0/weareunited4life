const express = require('express');
const logger = require('morgan');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const PORT = (process.env.PORT || 3000);
const app = express();

// Middleware
dotenv.config();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Database Connection
require('./app/Database');

// Models
require('./app/Models/User');
// require('./app/Models/Post');

// Routes
app.use('/api', require('./app/Routes/auth'));
app.use('/api', require('./app/Routes/user'));
// app.use('/api', require('./app/Routes/post'));

// Error Handling


// Initialize Server
app.listen(PORT, (err) =>{
	console.log(`Server is live on port ${PORT}`);
});