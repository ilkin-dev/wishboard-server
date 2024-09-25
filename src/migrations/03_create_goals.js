exports.up = function (knex) {
    return knex.schema.createTable('goals', table => {
        table.increments('id').primary();
        table.string('title', 255).notNullable();
        table.text('description');
        table.decimal('progress', 5, 2).defaultTo(0);
        table.date('deadline');
        table.integer('wishboard_id').unsigned().notNullable()
            .references('id').inTable('wishboards').onDelete('CASCADE');
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('goals');
};