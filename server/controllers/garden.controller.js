const router = require("express").Router()
const Garden = require("../models/garden.model")
const bcrypt = require("bcrypt");
const jwt = require ("jsonwebtoken");
const validateSessions = require("../middleware/validate-sessions")

router.post("/create", validateSessions, async (req, res) => {
    
    const { gardenName, city, state } = req.body;

    if (!req.body || !gardenName || !city || !state || !email) {
        //if not enough info passed, return error
        res.status(400).json({ message: "missing gardenName, city, or state" }); //400badrequest
    }    

    const newGarden = new Garden({
        gardenNamae,
        city,
        state,
        email,
        createdById: req.user._id,  //anyone can create a garden
        usersTable: [{ //initialize speciescount with crestor's counts
            uId: req.user._id,
            certificationsCount: 0,

            BugbountyCount: req.user.certifications.Budburst.speciesCount,
            eBirdCount: req.user.certifications.eBird.speciesCount,
            iNatCount: req.user.certifications.iNaturalist.speciesCount
            
        }] 
    });
    try {
        const newGarden = await gardenUser.save();
      
        res.json({gardenUser : newGarden});
    } catch (error) {
        res.json({message:error.stack})
    }
})

router.patch("/update/:id", validateSessions, async (req, res) => {
    console.log(req.params)
    try {
        const garden = await Garden.findById(req.params.id)
        garden.city= req.body.garden.city;
        garden.state= req.body.garden.state;
        garden.gardenName= req.body.garden.gardenName;
        garden.gardenNickname= req.body.garden.gardenNickname;
        garden.roundtable= req.body.garden.roundtable;
        garden.sqFootage= req.body.garden.sqFootage;
        garden.memberNames= req.body.garden.memberNames;
        garden.password= req.body.garden.password;
        garden.public= req.body.garden.public;
        garden.save();
        res.json({message: "Garden updated", garden : garden});
    } catch (error) {
        res.json({message: error.message})
    }
    
})
//! validateSessions removed for testing purposes, place between "/getgardens", validateSessions, async
router.get("/getgardens", async (req,res)=>{
    try {
        const garden = await Garden.find()
        res.json({garden : garden})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.get("/getgardenby/:id", validateSessions, async (req,res)=>{
    try {
        const garden = await Garden.findById(req.params.id)
        res.json({ message: "Garden found", garden : garden })
    } catch (error) {
        res.json({message:error.message})
    }
})

// router.post("/creategarden/setgardenbyid", async (req,res)=>{
//     try {
//         res.json({message: "Hello from setgardenbyid"})
//     } catch (error) {
//         res.json({message:error.message})
//     }
// })

router.delete("/deletegarden/:id", validateSessions, async (req,res)=>{
    try{
        const deleteGarden = await Garden.deleteOne({_id: req.params.id, ownerId: req.user_id,})
        res.json({message: deleteGarden.deletedCount > 0 ? "Garden removed" : "Garden not found", deleteGarden :deleteGarden})
    } catch (error) {
        res.json({message:error.message})
    }
})



module.exports = router