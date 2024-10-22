const jwt = require('jsonwebtoken');
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client("665690023472-571g4sim0ie57jo8e9slo1dmlf0rnada.apps.googleusercontent.com");
const User = require('../models/users');

exports.handleGoogleLogin = async (req, res) => {
    const { token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: "665690023472-571g4sim0ie57jo8e9slo1dmlf0rnada.apps.googleusercontent.com",
        });

        const payload = ticket.getPayload();
        const { sub: googleId, name, email, picture } = payload;

        // Check if the user already exists in the database
        let user = await User.findByGoogleId(googleId);

        // If the user doesn't exist, create a new one
        if (!user) {
            user = await User.create({
                googleId,
                name,
                email,
                profilePicture: picture,
            });
        }

        // Create a JWT token for the user
        const appToken = jwt.sign(
            { googleId, name, email, picture },
            "aefc3f8d9fb1b2cf1d7324b3ad96f8cdea2b88bc73d44f55b7bbecbe9a3e5f8b",
            { expiresIn: '1h' }
        );

        res.status(200).json({ user, token: appToken });
    } catch (error) {
        res.status(500).json({ error: 'Failed to verify Google token' });
    }
};
