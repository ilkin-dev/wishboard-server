const knex = require('../db/knex');

exports.findByWishboardId = (wishboardId) => {
    return knex('contributions').where({ wishboardId });
};

exports.create = (contributionData) => {
    return knex('contributions').insert(contributionData).returning('*');
};
