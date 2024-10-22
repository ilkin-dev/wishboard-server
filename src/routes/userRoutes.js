const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// User Routes
router.get('/:id', userController.getUserById);
router.get('/', userController.getAllUsers);

module.exports = router;
