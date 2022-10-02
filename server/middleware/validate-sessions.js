const { request } = require("express");
const jwt = require ("jsonwebtoken");
const User = require ("../models/user.model")


const validateSessions = async (req,res,next) => {
    const token = req.headers.authorization
    try {
    const decodedToken = await jwt.verify(token, process.env.JWT)
    console.log(decodedToken)

    const user = await User.findById(decodedToken.id)

    

    if (user) {
        request.user = user;
        return next();
    }
    } catch (error) {
       res.json({message: error.message}) 
    }



   

    req.test= "THIS IS A TEST"




  
}

module.exports= validateSessions;