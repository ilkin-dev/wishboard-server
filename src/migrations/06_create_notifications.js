exports.up = function (knex) {
    return knex.schema.createTable('notifications', table => {
        table.increments('id').primary();
        table.integer('user_id').unsigned().notNullable()
            .references('id').inTable('users').onDelete('CASCADE');
        table.text('message').notNullable();
        table.boolean('read').defaultTo(false);
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('notifications');
};