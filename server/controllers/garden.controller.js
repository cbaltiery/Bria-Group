const router = require("express").Router()

router.post("/creategarden", async (req,res)=>{
    try {
        res.json({message: "Hello from create Garden"})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.get("/getgardens", async (req,res)=>{
    try {
        res.json({message: "Hello from get Gardens"})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.get("/getgardenbyid", async (req,res)=>{
    try {
        res.json({message: "Hello from get Garden by ID"})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.post("/creategarden/setgardenbyid", async (req,res)=>{
    try {
        res.json({message: "Hello from setgardenbyid"})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.delete("/deletegardenid", async (req,res)=>{
    try {
        res.json({message: "Hello from delete garden by ID"})
    } catch (error) {
        res.json({message:error.message})
    }
})



module.exports = router