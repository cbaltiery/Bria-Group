const router = require("express").Router()

router.post("/createuser", async (req,res)=>{
    try {
        res.json({message: "Hello from create User"})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.get("/getusers", async (req,res)=>{
    try {
        res.json({message: "Hello from get Users"})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.get("/getuserbyid", async (req,res)=>{
    try {
        res.json({message: "Hello from get User by ID"})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.post("/createuser/setuserbyid", async (req,res)=>{
    try {
        res.json({message: "Hello from setuserbyid"})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.delete("/deleteuserid", async (req,res)=>{
    try {
        res.json({message: "Hello from delete user by ID"})
    } catch (error) {
        res.json({message:error.message})
    }
})

module.exports = router