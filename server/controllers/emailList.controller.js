const router = require("express").Router();
const emailList = require("../models/emailList.model");
const jwt = require ("jsonwebtoken");

router.post("/joinmailinglist", async (req,res)=>{
    const email = new emailList(
        {email : req.body.emails.email   
});
    try {
        const newEmailList = await email.save();
        let token = jwt.sign({id: newEmailList._id}, process.env.JWT)
        res.json({email : newEmailList, token : token});
    } catch (error) {
        res.json({message:error.message})
    }
})


module.exports = router