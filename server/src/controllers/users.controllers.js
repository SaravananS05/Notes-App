const express = require('express');
const {getAllUsers,registerUsers} = require('../services/users.services');

exports.getUsers = async (req,res) => {
    try{
        await getAllUsers();
        res.status(201).json({
            status: true,
            message: 'user displayed successfully.',
        });
    }
    catch(error){
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
} 

exports.registerUsers = async (req,res) => {
    try{
        const payload = req.body;
        await registerUsers(payload.username,payload.email,payload.password);
        res.status(201).json({
            status: true,
            message: 'user registered successfully.'
        })
    }
    catch(error){
        res.status(400).json({
            status: false,
            message: error.message,
        });
    }
}