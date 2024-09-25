exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('contributions').del()
        .then(function () {
            // Inserts seed entries
            return knex('contributions').insert([
                { wishboard_id: 1, contributor_id: 2, contribution: 'Check out this travel blog for tips!' },
                { wishboard_id: 2, contributor_id: 3, contribution: 'Here’s a link to a free guitar lesson site.' },
                { wishboard_id: 3, contributor_id: 1, contribution: 'Use this template for your website.' }
            ]);
        });
};