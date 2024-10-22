const express = require('express');
const router = express.Router();
const googleAuthController = require('../controllers/googleAuthController');

router.post('/google-auth', googleAuthController.handleGoogleLogin);

module.exports = router;
