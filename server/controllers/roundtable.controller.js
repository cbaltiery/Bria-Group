const router = require("express").Router();
const Roundtable = require("../models/roundTable.model");

router.post("/createroundtable", async (req,res)=>{
    const roundtable = new Roundtable(
        {groupName : req.body.roundtable.groupName,
         password : req.body.roundtable.password,
         city : req.body.roundtable.city,
         state : req.body.roundtable.state
});
    try {
        const newRoundtable = await roundtable.save();
        res.json({roundtable : newRoundtable});
    } catch (error) {
        res.json({message:error.message})
    }
})

router.patch("/update/:id", async (req, res) => {
    console.log(req.params)
    try {
        const roundtable = await Roundtable.findById(req.params.id)
        roundtable.city= req.body.roundtable.city;
        roundtable.state= req.body.roundtable.state;
        roundtable.groupName= req.body.roundtable.groupName;
        roundtable.password= req.body.roundtable.password;
        roundtable.save();
        res.json({message: "Roundtable updated", roundtable : roundtable});
    } catch (error) {
        res.json({message: error.message})
    }
    
})

router.get("/getroundtables", async (req,res)=>{
    try {
        const roundtable = await Roundtable.find()
        res.json({roundtable : roundtable})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.get("/getroundtableby/:id", async (req,res)=>{
    try {
        const roundtable = await Roundtable.findById(req.params.id)
        res.json({ message: "Roundtable found", roundtable : roundtable })
    } catch (error) {
        res.json({message:error.message})
    }
})

// router.post("/createroundtable/setroundtablebyid", async (req,res)=>{
//     try {
//         res.json({message: "Hello from setroundtablebyid"})
//     } catch (error) {
//         res.json({message:error.message})
//     }
// })

router.delete("/deleteroundtable/:id", async (req,res)=>{
    try{
        const deleteRoundtable = await Roundtable.deleteOne({_id: req.params.id, ownerId: req.user_id,})
        res.json({message: deleteRoundtable.deletedCount > 0 ? "Roundtable removed" : "Roundtable not found", deleteRoundtable :deleteRoundtable})
    } catch (error) {
        res.json({message:error.message})
    }
})

module.exports = router