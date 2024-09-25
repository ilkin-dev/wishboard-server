exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('wishboards').del()
        .then(function () {
            // Inserts seed entries
            return knex('wishboards').insert([
                { title: 'Visit Japan', description: 'Planning a dream trip to Japan', user_id: 1, is_public: true, progress: 20 },
                { title: 'Learn Guitar', description: 'Practice guitar daily', user_id: 2, is_public: false, progress: 30 },
                { title: 'Build a Portfolio', description: 'Create a personal website portfolio', user_id: 3, is_public: true, progress: 50 }
            ]);
        });
};