const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController'); 

router.get('/profile', authController.verifyToken, userController.getProfile);

module.exports = router;
