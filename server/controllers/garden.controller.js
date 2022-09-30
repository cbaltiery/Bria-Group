const router = require("express").Router()
const Garden = require("../models/garden.model")

router.post("/creategarden", async (req,res)=>{
    const gardenUser = new Garden(
        {email : req.body.garden.email,
         password : req.body.garden.password,
         city : req.body.garden.city,
         state : req.body.garden.state
});
    try {
        const newGarden = await gardenUser.save();
        res.json({gardenUser : newGarden});
    } catch (error) {
        res.json({message:error.message})
    }
})

router.patch("/update/:id", async (req, res) => {
    console.log(req.params)
    try {
        const garden = await Garden.findById(req.params.id)
        garden.city= req.body.garden.city;
        garden.state= req.body.garden.state;
        garden.email= req.body.garden.email;
        garden.password= req.body.garden.password;
        garden.save();
        res.json({message: "Garden updated", garden : garden});
    } catch (error) {
        res.json({message: error.message})
    }
    
})

router.get("/getgardens", async (req,res)=>{
    try {
        const garden = await Garden.find()
        res.json({garden : garden})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.get("/getgardenby/:id", async (req,res)=>{
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

router.delete("/deletegarden/:id", async (req,res)=>{
    try{
        const deleteGarden = await Garden.deleteOne({_id: req.params.id, ownerId: req.user_id,})
        res.json({message: deleteGarden.deletedCount > 0 ? "Garden removed" : "Garden not found", deleteGarden :deleteGarden})
    } catch (error) {
        res.json({message:error.message})
    }
})



module.exports = router