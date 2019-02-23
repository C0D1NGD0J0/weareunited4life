require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const PORT = (process.env.PORT || 3000);
const app = express();

// Middleware

// Database Connection

// Models

// Routes

// Error Handling

// Initialize Server
app.listen(PORT, (err) =>{
	console.log(`Server is live on port ${PORT}`);
});