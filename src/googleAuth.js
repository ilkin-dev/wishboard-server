const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
const User = require('../models/user');

exports.googleAuth = async (req, res) => {
    const { token } = req.body;
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });
        const { sub, email, name, picture } = ticket.getPayload();
        let user = await User.findByGoogleId(sub);
        if (!user) {
            user = await User.create({ googleId: sub, email, name, picture });
        }
        const jwtToken = jwt.sign({ id: user.id }, process.env.JWT_SECRET);
        res.status(200).json({ token: jwtToken });
    } catch (error) {
        res.status(500).json({ error: 'Google Authentication failed' });
    }
};
