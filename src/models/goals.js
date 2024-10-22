const knex = require('../db/knex');

exports.findById = (id) => {
    return knex('goals').where({ id }).first();
};

exports.findByWishboardId = (wishboardId) => {
    return knex('goals').where({ wishboardId });
};

exports.create = (goalData) => {
    return knex('goals').insert(goalData).returning('*');
};

exports.updateById = (id, updates) => {
    return knex('goals').where({ id }).update(updates);
};

exports.deleteById = (id) => {
    return knex('goals').where({ id }).del();
};
