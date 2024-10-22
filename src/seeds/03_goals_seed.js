exports.seed = function (knex) {
    return knex('goals').del()  // Deletes existing goals
        .then(function () {
            return knex('goals').insert([
                { wishboardId: 1, title: 'Save $5000', description: 'Goal to save money for vacation', deadline: '2024-12-20', progress: 40 },
                { wishboardId: 1, title: 'Plan itinerary', description: 'Research and plan places to visit', deadline: '2024-12-15', progress: 70 },
                { wishboardId: 2, title: 'Complete full-stack course', description: 'Finish full-stack development course', deadline: '2024-12-15', progress: 80 },
                { wishboardId: 2, title: 'Build personal website', description: 'Develop a personal portfolio website', deadline: '2024-12-01', progress: 50 },
                { wishboardId: 3, title: 'Train for marathon', description: 'Follow a running program to prepare for a marathon', deadline: '2024-11-01', progress: 60 },
                { wishboardId: 3, title: 'Buy running gear', description: 'Purchase proper running shoes and attire', deadline: '2024-12-01', progress: 30 },
                { wishboardId: 4, title: 'Read 10 books', description: 'Complete reading list of 10 books', deadline: '2024-11-02', progress: 20 },
                { wishboardId: 5, title: 'Find real estate agent', description: 'Research and contact real estate agents', deadline: '2025-11-05', progress: 10 }
            ]);
        });
};
