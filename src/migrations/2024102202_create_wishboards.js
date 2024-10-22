exports.up = function (knex) {
    return knex.schema.createTable('wishboards', (table) => {
        table.increments('id').primary();
        table.string('googleId').references('googleId').inTable('users').onDelete('CASCADE');  // Foreign key reference
        table.string('title').notNullable();
        table.text('description');
        table.boolean('isPublic').defaultTo(false);
        table.date('deadline');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.timestamp('updated_at').defaultTo(knex.fn.now());
        table.string('thumbnail').defaultTo('https://www.infoworld.com/wp-content/uploads/2024/06/sparkler-100703681-orig.jpg?quality=50&strip=all&w=1024');
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable('wishboards');
};
