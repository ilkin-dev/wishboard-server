const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client("665690023472-571g4sim0ie57jo8e9slo1dmlf0rnada.apps.googleusercontent.com");
const jwt = require('jsonwebtoken');

exports.authenticateGoogleToken = async (req, res, next) => {
    const { token } = req.body;

    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: "665690023472-571g4sim0ie57jo8e9slo1dmlf0rnada.apps.googleusercontent.com",
        });

        const payload = ticket.getPayload();
        req.user = {
            sub: payload.sub, // Google user ID
            name: payload.name,
            email: payload.email,
            picture: payload.picture,
        };
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid Google token' });
    }
};

const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization.split(' ')[1];
    if (token) {
        jwt.verify(token, "aefc3f8d9fb1b2cf1d7324b3ad96f8cdea2b88bc73d44f55b7bbecbe9a3e5f8b", (err, user) => {
            if (err) {
                return res.sendStatus(403); // Forbidden if token is invalid
            }
            req.user = user; // Attach user data to req.user
            next();
        });
    } else {
        res.sendStatus(401); // Unauthorized if token is missing
    }
};

module.exports = authenticateJWT;
