const express = require('express');
const app = express();

const userRouter = require('./users/userRouter');
app.use('/users', userRouter);


module.exports = app;
