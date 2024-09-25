exports.up = function (knex) {
    return knex.schema.createTable('wishboards', table => {
        table.increments('id').primary();
        table.string('title', 255).notNullable();
        table.text('description');
        table.date('deadline');
        table.boolean('is_public').notNullable().defaultTo(false);
        table.integer('user_id').unsigned().notNullable()
            .references('id').inTable('users').onDelete('CASCADE');
        table.decimal('progress', 5, 2).defaultTo(0);
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('wishboards');
};