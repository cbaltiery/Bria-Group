const { request } = require("express");
const jwt = require ("jsonwebtoken");
const User = require ("../models/user.model")


const validateSessions = async (req,res,next) => {
    const token = req.headers.authorization; 
    try {
        const decodedToken = await jwt.verify(token, process.env.JWT)
        const user = await User.findById(decodedToken.id)

        if (user) { 
            req.user = user; //inject credential'd user into request object
            return next();
        }
    } catch (error) {
    res.status(500).json({message: error.message}) 
    }
}

module.exports= validateSessions;