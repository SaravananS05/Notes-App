const express = require('express');
const mongodb = require('mongodb');
const app = require('./app')
const dotenv = require('dotenv');
dotenv.config();

app.listen(process.env.PORT||5000,()=>{
    console.log(`App is listening to the port: ${process.env.PORT}`);
})