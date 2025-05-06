const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


const connectDB =  async() => {
    await mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("MongoDB connected successfully");
    })
    .catch((err)=>{
        console.log("MongoDB is not Connected..");
    });
}

module.exports = connectDB;