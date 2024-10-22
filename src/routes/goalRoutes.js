const express = require('express');
const router = express.Router({ mergeParams: true }); // Merge params to access wishboardId
const goalController = require('../controllers/goalController');

// Routes for goals within a specific wishboard
router.post('/', goalController.createGoal);
router.get('/', goalController.getAllGoalsForWishboard);
router.get('/:id', goalController.getGoal);
router.put('/:id', goalController.updateGoal);
router.delete('/:id', goalController.deleteGoal);

module.exports = router;
