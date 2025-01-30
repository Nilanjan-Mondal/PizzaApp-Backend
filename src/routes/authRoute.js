const express = require('express');
const login = require('../controllers/authController');
const { logoutUser } = require('../services/authService');

const authRouter = express.Router();

authRouter.post('/login', login);

authRouter.get('/logout', logoutUser);

module.exports = authRouter;