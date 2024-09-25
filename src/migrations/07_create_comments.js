exports.up = function (knex) {
    return knex.schema.createTable('comments', table => {
        table.increments('id').primary();
        table.integer('goal_id').unsigned().notNullable()
            .references('id').inTable('goals').onDelete('CASCADE');
        table.integer('user_id').unsigned().notNullable()
            .references('id').inTable('users').onDelete('CASCADE');
        table.text('comment').notNullable();
        table.timestamps(true, true);
    });
};

exports.down = function (knex) {
    return knex.schema.dropTableIfExists('comments');
};