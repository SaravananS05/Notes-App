const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const usersRouter = require('./src/routes/users.routes');
const connectDB = require('./src/config/db.config');
const app = express();
dotenv.config();

app.use(express.json());
app.use(morgan('dev'));
app.use('/api/users/',usersRouter)

connectDB();

module.exports = app;