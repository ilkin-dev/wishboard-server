const express = require('express');
const router = express.Router();

// Import all individual route files
const googleAuthRoutes = require('./routes/googleAuthRoutes');
const wishboardRoutes = require('./routes/wishboardRoutes');
const goalRoutes = require('./routes/goalRoutes');
const contributionRoutes = require('./routes/contributionRoutes');
const userRoutes = require('./routes/userRoutes');

// Apply routes under specific path prefixes
router.use('/auth', googleAuthRoutes);                // All routes for Google OAuth
router.use('/wishboards', wishboardRoutes);           // All routes for wishboards

// Nested routes for goals and contributions inside wishboards
router.use('/wishboards/:wishboardId/goals', goalRoutes);
router.use('/wishboards/:wishboardId/contributions', contributionRoutes);

// User-related routes
router.use('/users', userRoutes);

module.exports = router;
