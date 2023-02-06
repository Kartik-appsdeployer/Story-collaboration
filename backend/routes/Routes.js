const express = require('express');
const router = express.Router();
const login = require('../controllers/Auth/login');
const register = require('../controllers/Auth/register');

router.use('/login', login);
router.use('/register', register);

module.exports = router