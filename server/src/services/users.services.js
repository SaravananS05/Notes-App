const express = require('express');
const userModel = require('../models/users.models');

exports.getAllUsers = async () => {
    const data = await userModel.find();
    console.log(data);
}

exports.registerUsers = async (username,email,password) => {
    const obj = {
        username,
        email,
        password
    };
    console.log(obj);
    await userModel.create(obj);
}