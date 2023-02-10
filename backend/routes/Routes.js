const express = require('express');
const router = express.Router();
const login = require('../controllers/Auth/login');
const register = require('../controllers/Auth/register');
const addPost = require('../controllers/Home/addPost');
const markasCompleted = require('../controllers/Home/markasCompleted');
const makeCollaboration = require('../controllers/Home/makeCollaboration');
const acceptRequest = require('../controllers/Home/acceptRequest');
const viewPost = require('../controllers/Home/viewPost');
const viewAllPosts = require('../controllers/Home/viewAllPosts');

router.use('/login', login);
router.use('/register', register);
router.use('/addPost', addPost);
router.use('/markasCompleted', markasCompleted);
router.use('/makeCollaboration', makeCollaboration);
router.use('/acceptRequest', acceptRequest);
router.use('/viewPost', viewPost);
router.use('/viewAllPosts', viewAllPosts);

module.exports = router