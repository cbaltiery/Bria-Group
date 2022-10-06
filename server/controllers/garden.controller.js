const router = require("express").Router()
const Garden = require("../models/garden.model")
const bcrypt = require("bcrypt");
const jwt = require ("jsonwebtoken");
const validateSessions = require("../middleware/validate-sessions")

router.post("/creategarden", async (req,res)=>{
    const gardenUser = new Garden(
        {gardenName : verifyUndefinedOrNull( req.body.garden.gardenName),
         gardenNickname : verifyUndefinedOrNull(req.body.garden.gardenNickname),
         roundtable : verifyUndefinedOrNullBoolean(req.body.garden.roundtable),
         squareFootage : verifyUndefinedOrNull(req.body.garden.squareFootage),
         city : verifyUndefinedOrNull(req.body.garden.city),
         state : verifyUndefinedOrNull(req.body.garden.state),
         memberNames : verifyUndefinedOrNull(req.body.garden.memberNames),
         public: verifyUndefinedOrNullBoolean(req.body.garden.public)
});
    try {
        const newGarden = await gardenUser.save();
      
        res.json({gardenUser : newGarden});
    } catch (error) {
        res.json({message:error.stack})
    }
})

function verifyUndefinedOrNull(item){
    return item == undefined || item == null ? "" : item
}
function verifyUndefinedOrNullBoolean(item){
    return item == undefined || item == null ? false : item
}

// router.post("/login", async (req, res) => {
//     console.log(req.body.garden.gardenName)
//     try{
//     const garden =  await Garden.findOne({gardenName : req.body.garden.gardenName})
//     if (garden){
//         const passwordsMatch = await bcrypt.compare(
//             req.body.garden.password,
//             garden.password
//           );
//           console.log(passwordsMatch);
//           if (passwordsMatch) {
//             let token = jwt.sign({id: garden._id}, process.env.JWT, {expiresIn: 60*60*24})
//             res.status(302).json({ message: "garden found", garden: garden, token : token });
//           } else {
//             res.status(401).json({ message: "password mismatch" });
//           }
//         } else {
//           res.status(404).json({ message: "garden not found", garden: garden });
//         }
//       } catch (error) {
//         res.status(503).json({ message: error.message });
//       }
//     });

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