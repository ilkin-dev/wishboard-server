const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const apiRoutes = require('./apiRoutes'); // Single entry point for all routes

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Middleware to parse JSON
app.use(bodyParser.json());

// Use the combined routes
app.use('/api', apiRoutes); // All routes are prefixed with /api

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
