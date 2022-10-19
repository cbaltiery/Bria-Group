const { request } = require("express");
const jwt = require ("jsonwebtoken");
const User = require ("../models/user.model")


const validateSession = async (req, res, next) => {
    const token = req.headers.authorization; 
    try {
        const decodedToken = await jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findById(decodedToken.id);

        if (user) {
            req.user = user; //inject credential'd user into req    
            return next();
        }
    } catch (error) {
    res.status(500).json({validateSessionCatch: error.message}) 
    }
}

module.exports= validateSession;