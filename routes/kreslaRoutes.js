const express = require('express');
const router = express.Router();
const anotherController = require('../controllers/kreslaController');

router.get('/items', anotherController.getAllItems);

module.exports = router;
