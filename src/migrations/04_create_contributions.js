exports.up = function (knex) {
    return knex.schema.createTable('contributions', table => {
        table.increments('id').primary();
        table.integer('wishboard_id').unsigned().notNullable()
            .references('id').inTable('wishboards').onDelete('CASCADE');
        table.integer('contributor_id').unsigned().notNullable()
            .references('id').inTable('users').onDelete('CASCADE');
        table.text('contribution').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('contributions');
};