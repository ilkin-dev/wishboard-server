const Wishboard = require('../models/wishboard');

// exports.getAllWishboards = async (req, res) => {
//     try {
//         const wishboards = await Wishboard.findAllWithUsers();
//         res.status(200).json(wishboards);
//     } catch (error) {
//         res.status(500).json({ error: 'Failed to fetch wishboards' });
//     }
// };

exports.getAllPublicWishboards = async (req, res) => {
    try {
        const wishboards = await Wishboard.findAllPublic();
        res.status(200).json(wishboards);
    } catch (error) {
        console.error('Error fetching public wishboards:', error);
        res.status(500).json({ error: 'Failed to fetch wishboards' });
    }
};

exports.getPublicWishboardsWithPagination = async (req, res) => {
    const { start = 0, limit = 6 } = req.query; // Use query parameters for pagination

    try {
        const wishboards = await Wishboard.findPublicWithPagination(parseInt(start), parseInt(limit));

        if (wishboards.length === 0) {
            return res.status(200).json([]); // Return empty array if no wishboards are found
        }

        res.status(200).json(wishboards);
    } catch (error) {
        console.error('Error fetching paginated wishboards:', error);
        res.status(500).json({ error: 'Failed to fetch paginated wishboards' });
    }
};

exports.getWishboardsByUser = async (req, res) => {
    try {
        const wishboards = await Wishboard.findByUserId(req.user.googleId);
        res.status(200).json(wishboards);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch user wishboards' });
    }
};

exports.createWishboard = async (req, res) => {
    const { title, description, deadline, thumbnail, isPublic } = req.body;

    // Check if user is authenticated and googleId exists
    console.log('Request User:', req.user);  // Debug log

    if (!req.user || !req.user.googleId) {
        return res.status(400).json({ error: 'Google ID not found, authorization required' });
    }

    try {
        const newWishboard = await Wishboard.create({
            googleId: req.user.googleId,  // Use googleId from the token's sub field
            title,
            description,
            deadline,
            thumbnail: thumbnail || 'https://www.infoworld.com/wp-content/uploads/2024/06/sparkler-100703681-orig.jpg?quality=50&strip=all&w=1024',
            isPublic,
        });


        res.status(201).json({ status: 'Wishboard created successfully', wishboard: newWishboard });
    } catch (error) {
        console.error('Error creating wishboard:', error); // Log the error
        res.status(500).json({ error: 'Failed to create wishboard', details: error.message });
    }
};
