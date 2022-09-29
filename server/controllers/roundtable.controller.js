const router = require("express").Router()

router.post("/createroundtable", async (req,res)=>{
    try {
        res.json({message: "Hello from create roundtable"})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.get("/getroundtables", async (req,res)=>{
    try {
        res.json({message: "Hello from get roundtables"})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.get("/getroundtablebyid", async (req,res)=>{
    try {
        res.json({message: "Hello from get roundtable by ID"})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.post("/createroundtable/setroundtablebyid", async (req,res)=>{
    try {
        res.json({message: "Hello from setroundtablebyid"})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.delete("/deleteroundtableid", async (req,res)=>{
    try {
        res.json({message: "Hello from delete roundtable by ID"})
    } catch (error) {
        res.json({message:error.message})
    }
})

module.exports = router