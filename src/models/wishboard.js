const knex = require('../db/knex');

exports.create = (wishboardData) => {
    return knex('wishboards').insert(wishboardData);
};

exports.findById = (id) => {
    return knex('wishboards')
        .where({ id })
        .first();
};

exports.findAllPublic = () => {
    return knex('wishboards')
        .join('users', 'wishboards.googleId', '=', 'users.googleId')
        .select('wishboards.*', 'users.name as username')
        .where('wishboards.isPublic', true);
};

exports.findPublicWithPagination = (start, limit) => {
    return knex('wishboards')
        .join('users', 'wishboards.googleId', '=', 'users.googleId')
        .select('wishboards.*', 'users.name as username')
        .where('wishboards.isPublic', true)
        .offset(start)
        .limit(limit);
};

exports.findByUserId = (googleId) => {
    return knex('wishboards').where({ googleId });
};

exports.findAllWithUsers = () => {
    return knex('wishboards')
        .join('users', 'wishboards.googleId', '=', 'users.googleId')
        .select('wishboards.*', 'users.name as username');
};
