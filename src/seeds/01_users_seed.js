// 01_users_seed.js
exports.seed = function (knex) {
    return knex('users').del()  // Deletes existing users
        .then(function () {
            return knex('users').insert([
                { googleId: 'google126', name: 'Bob Smith', email: 'bob.smith@example.com', profilePicture: 'https://example.com/pic4.jpg' },
                { googleId: 'google127', name: 'Charlie Brown', email: 'charlie.brown@example.com', profilePicture: 'https://example.com/pic5.jpg' },
                { googleId: 'google128', name: 'David Warner', email: 'david.warner@example.com', profilePicture: 'https://example.com/pic6.jpg' },
                { googleId: 'google129', name: 'Eve Adams', email: 'eve.adams@example.com', profilePicture: 'https://example.com/pic7.jpg' },
                { googleId: 'google130', name: 'Frank Castle', email: 'frank.castle@example.com', profilePicture: 'https://example.com/pic8.jpg' }
            ]);
        });
};
