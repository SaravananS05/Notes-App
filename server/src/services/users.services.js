const express = require('express');
const userModel = require('../models/users.models');
const bcrypt = require('bcryptjs');

exports.getAllUsers = async () => {
    const data = await userModel.find();
    console.log(data);
}

exports.registerUsers = async (username,email,password) => {
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password,salt);
    const obj = {
        username,
        email,
        password: hashedPassword
    };
    console.log(obj);
    await userModel.create(obj);
}