const Contribution = require('../models/contribution');

exports.createContribution = async (req, res) => {
    const { wishboardId, contributionText } = req.body;
    try {
        const contribution = await Contribution.create({
            wishboardId,
            userId: req.user.id,  // Assuming the logged-in user
            contributionText,
        });
        res.status(201).json({ contributionId: contribution.id, status: 'Contribution added successfully' });
    } catch (error) {
        res.status(500).json({ error: 'Failed to add contribution' });
    }
};

exports.getContributionsByWishboard = async (req, res) => {
    const { wishboardId } = req.params;
    try {
        const contributions = await Contribution.findByWishboardId(wishboardId);
        res.status(200).json(contributions);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch contributions' });
    }
};
