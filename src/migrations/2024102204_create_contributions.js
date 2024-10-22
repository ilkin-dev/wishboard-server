exports.up = function (knex) {
    return knex.schema.createTable('contributions', function (table) {
        table.increments('id').primary();
        table.integer('wishboardId').unsigned().notNullable();
        table.string('googleId').notNullable();  // Now using googleId as the foreign key
        table.text('contributionText').notNullable();
        table.timestamps(true, true);

        table.foreign('wishboardId').references('id').inTable('wishboards').onDelete('CASCADE');
        table.foreign('googleId').references('googleId').inTable('users').onDelete('CASCADE');  // Updated reference
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('contributions');
};
