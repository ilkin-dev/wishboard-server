exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('users').del()
        .then(function () {
            // Inserts seed entries
            return knex('users').insert([
                { name: 'Alice', email: 'alice@example.com', password: 'hashed_password1' },
                { name: 'Bob', email: 'bob@example.com', password: 'hashed_password2' },
                { name: 'Charlie', email: 'charlie@example.com', password: 'hashed_password3' }
            ]);
        });
};