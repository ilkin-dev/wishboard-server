const express = require('express');
const router = express.Router({ mergeParams: true }); // Merge params to access wishboardId
const contributionController = require('../controllers/contributionController');

// Routes for contributions within a specific wishboard
router.post('/', contributionController.createContribution);
router.get('/', contributionController.getContributionsByWishboard);

module.exports = router;
