const router = require("express").Router()

router.get("/getiNaturalistSpecies", async (req,res)=>{
    try {
        res.json({message: "Hello from getiNaturalistSpecies"})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.get("/geteBirdSpeciesCount", async (req,res)=>{
    try {
        res.json({message: "Hello from get eBirdSpeciesCount"})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.get("/getBugBounty", async (req,res)=>{
    try {
        res.json({message: "Hello from getBugBounty"})
    } catch (error) {
        res.json({message:error.message})
    }
})

module.exports = router