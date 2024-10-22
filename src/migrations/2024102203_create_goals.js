exports.up = function (knex) {
    return knex.schema.createTable('goals', function (table) {
        table.increments('id').primary();
        table.integer('wishboardId').unsigned().notNullable();
        table.string('title').notNullable();
        table.text('description').nullable();
        table.date('deadline').nullable();
        table.integer('progress').defaultTo(0);  // Progress is tracked as percentage (0-100)
        table.timestamps(true, true);

        table.foreign('wishboardId').references('id').inTable('wishboards').onDelete('CASCADE');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('goals');
};
