const express = require('express');
const router = express.Router();
const wishboardController = require('../controllers/wishboardController');
const authenticateJWT = require('../middleware/auth');

// Fix: Ensure the handlers are functions
router.get('/user', authenticateJWT, wishboardController.getWishboardsByUser);
router.post('/create', authenticateJWT, wishboardController.createWishboard);
router.get('/', wishboardController.getAllPublicWishboards);
router.get('/paginate', wishboardController.getPublicWishboardsWithPagination);

module.exports = router;
