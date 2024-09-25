exports.up = function (knex) {
    return knex.schema.createTable('collaborators', table => {
        table.increments('id').primary();
        table.integer('wishboard_id').unsigned().notNullable()
            .references('id').inTable('wishboards').onDelete('CASCADE');
        table.integer('user_id').unsigned().notNullable()
            .references('id').inTable('users').onDelete('CASCADE');
        table.enu('role', ['viewer', 'editor']).notNullable().defaultTo('viewer');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('collaborators');
};