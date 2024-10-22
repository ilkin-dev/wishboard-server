const knex = require('../db/knex');

// Find a user by their Google ID (sub)
exports.findByGoogleId = (googleId) => {
    return knex('users')
        .where({ googleId })
        .first();
};

// Get all users (for general purposes)
exports.findAll = () => {
    return knex('users')
        .select('*');
};

// Create a new user (ensure created_at and updated_at are set)
exports.create = async (userData) => {
    try {
        // Add timestamps for created_at and updated_at
        const userWithTimestamps = {
            ...userData,
            created_at: knex.fn.now(),
            updated_at: knex.fn.now(),
        };

        // Insert the new user into the database
        const [insertedId] = await knex('users')
            .insert(userWithTimestamps);

        // Fetch the newly inserted user
        const newUser = await this.findByGoogleId(insertedId);
        console.log('New user created:', newUser);

        return newUser;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};
