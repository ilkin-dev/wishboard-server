const Goal = require('../models/goals');

exports.createGoal = async (req, res) => {
    const { wishboardId, title, description, deadline } = req.body;
    try {
        const goal = await Goal.create({
            wishboardId,
            title,
            description,
            deadline,
        });
        res.status(201).json({ goalId: goal.id, status: 'Goal created successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create goal' });
    }
};

exports.getAllGoalsForWishboard = async (req, res) => {
    const { wishboardId } = req.params;

    try {
        const goals = await Goal.findByWishboardId(wishboardId);

        if (!goals || goals.length === 0) {
            return res.status(200).json([]);
        }

        res.status(200).json(goals);
    } catch (error) {
        console.error('Error fetching goals for wishboard:', error);
        res.status(500).json({ error: 'Failed to fetch goals for wishboard' });
    }
};


exports.getGoal = async (req, res) => {
    const { id } = req.params;
    try {
        const goal = await Goal.findById(id);
        if (!goal) {
            return res.status(404).json({ error: 'Goal not found' });
        }
        res.status(200).json(goal);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch goal' });
    }
};

exports.updateGoal = async (req, res) => {
    const { id } = req.params;
    const updates = req.body;
    try {
        await Goal.updateById(id, updates);
        res.status(200).json({ status: 'Goal updated successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to update goal' });
    }
};

exports.deleteGoal = async (req, res) => {
    const { id } = req.params;
    try {
        await Goal.deleteById(id);
        res.status(200).json({ status: 'Goal deleted' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete goal' });
    }
};
