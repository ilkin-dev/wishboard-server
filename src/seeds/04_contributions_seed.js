exports.seed = function (knex) {
    return knex('contributions').del()  // Delete existing contributions
        .then(function () {
            return knex('contributions').insert([
                { wishboardId: 1, googleId: 'google126', contributionText: 'Check out this travel blog for tips on saving money' },
                { wishboardId: 2, googleId: 'google127', contributionText: 'I have a good contact for a real estate agent' },
            ]);
        });
};
