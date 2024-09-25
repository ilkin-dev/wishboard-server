exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('goals').del()
        .then(function () {
            // Inserts seed entries
            return knex('goals').insert([
                { title: 'Save $1000', description: 'Save money for travel', progress: 50, wishboard_id: 1 },
                { title: 'Learn 10 chords', description: 'Master 10 guitar chords', progress: 20, wishboard_id: 2 },
                { title: 'Build homepage', description: 'Create the homepage for portfolio', progress: 60, wishboard_id: 3 }
            ]);
        });
};