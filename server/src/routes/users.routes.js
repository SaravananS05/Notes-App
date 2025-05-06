const express = require('express');
const {getUsers,registerUsers} = require('../controllers/users.controllers')

const usersRouter = express.Router();

usersRouter.get('/get_users',getUsers);
usersRouter.post('/register_user',registerUsers);

module.exports = usersRouter;