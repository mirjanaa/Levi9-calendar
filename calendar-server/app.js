const usersRouter = require('./routes/users');
const meetingsRouter = require('./routes/meetings');

const express = require('express');
const mongoose = require('mongoose');
const { urlencoded, json } = require('body-parser');

const app = express();

const databaseString = process.env.DB_STING || 'mongodb://localhost:27017/callendar-base';

mongoose.connect(databaseString, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    
mongoose.connection.once('open', function () {
    console.log('Successful connection');
});
  
mongoose.connection.on('error', (error) => {
    console.log('Error: ', error);
});
  
  
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  
    if (req.method === 'OPTIONS') {
      res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PATCH, PUT, DELETE');
  
      return res.status(200).json({});
    }
  
    next();
});
  
app.use(json());
app.use(urlencoded({ extended: false }));
  
app.use('/api/users', usersRouter);
app.use('/api/meetings', meetingsRouter);
  
app.use(function (req, res, next) {
    const error = new Error('Invalid request');
    error.status = 405;
  
    next(error);
});
  
app.use(function (error, req, res, next) {
    const statusCode = error.status || 500;
    res.status(statusCode).json({
      error: {
        message: error.message,
        status: statusCode,
        stack: error.stack,
      },
    });
});
  
module.exports = app;

