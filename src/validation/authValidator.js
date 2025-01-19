const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/serverConfig');

const isLoggedIn = (req, res, next) => {
    const token = req.cookies["authToken"];
    if (!token) {
        return res.status(401).json({
            success: false,
            data: {},
            error: "not authenticated",
            message: "No auth token provided"
        });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        // user is authenticated allow the to access the controllers
        req.user = {
            // adding user details to the request object so that we can access the user details in the controllers
            id: decoded.id,
            email: decoded.email
        };

        next(); // call the next middleware or controller

    } catch (error) {
        return res.status(401).json({
            success: false,
            data: {},
            error: "not authenticated",
            message: "Invalid token provided"  // token tampered or changed
        });
    }
}

module.exports = {
    isLoggedIn
}