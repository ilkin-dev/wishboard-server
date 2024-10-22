// 02_wishboards_seed.js
exports.seed = function (knex) {
    return knex('wishboards').del()  // Deletes existing wishboards
        .then(function () {
            return knex('wishboards').insert([
                { id: 1, googleId: 'google126', title: 'Travel the world', description: 'Visit all continents', isPublic: true, deadline: '2025-12-31', thumbnail: 'https://www.infoworld.com/wp-content/uploads/2024/06/sparkler-100703681-orig.jpg?quality=50&strip=all&w=1024' },
                { id: 2, googleId: 'google127', title: 'Learn coding', description: 'Master full-stack development', isPublic: true, deadline: '2023-10-01', thumbnail: 'https://www.infoworld.com/wp-content/uploads/2024/06/sparkler-100703681-orig.jpg?quality=50&strip=all&w=1024' },
                { id: 3, googleId: 'google128', title: 'Run a marathon', description: 'Complete a marathon in under 4 hours', isPublic: false, deadline: '2024-06-15', thumbnail: 'https://www.infoworld.com/wp-content/uploads/2024/06/sparkler-100703681-orig.jpg?quality=50&strip=all&w=1024' },
                { id: 4, googleId: 'google129', title: 'Read 50 books', description: 'Expand my knowledge', isPublic: true, deadline: '2023-12-31', thumbnail: 'https://www.infoworld.com/wp-content/uploads/2024/06/sparkler-100703681-orig.jpg?quality=50&strip=all&w=1024' },
                { id: 5, googleId: 'google130', title: 'Buy a house', description: 'Find a dream home', isPublic: false, deadline: '2026-01-01', thumbnail: 'https://www.infoworld.com/wp-content/uploads/2024/06/sparkler-100703681-orig.jpg?quality=50&strip=all&w=1024' }
            ]);
        });
};
