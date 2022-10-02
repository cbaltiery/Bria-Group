const router = require("express").Router();
const Roundtable = require("../models/roundTable.model");
const bcrypt = require("bcrypt");
const jwt = require ("jsonwebtoken");

router.post("/createroundtable", async (req,res)=>{
    const roundtable = new Roundtable(
        {groupName : req.body.roundtable.groupName,
         nickName : req.body.roundtable.nickName,
         password : bcrypt.hashSync (req.body.roundtable.password, 10),
         city : req.body.roundtable.city,
         state : req.body.roundtable.state,
         gardenList : req.body.roundtable.gardenList,
         mission: req.body.roundtable.mission
});
    try {
        const newRoundtable = await roundtable.save();
        let token = jwt.sign({id: newRoundtable._id}, process.env.JWT, {expiresIn: 60*60*24})
        res.json({roundtable : newRoundtable, token : token});
    } catch (error) {
        res.json({message:error.message})
    }
})

router.post("/login", async (req, res) => {
    console.log(req.body.roundtable.groupName)
    try{
    const roundtable =  await Roundtable.findOne({groupName : req.body.roundtable.groupName})
    if (roundtable){
        const passwordsMatch = await bcrypt.compare(
            req.body.roundtable.password,
            roundtable.password
          );
          console.log(passwordsMatch);
          if (passwordsMatch) {
            let token = jwt.sign({id: roundtable._id}, process.env.JWT, {expiresIn: 60*60*24})
            res.json({ message: "roundtable found", roundtable: roundtable, token : token });
          } else {
            res.json({ message: "password mismatch" });
          }
        } else {
          res.json({ message: "roundtable not found", roundtable: roundtable });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    });

router.patch("/update/:id", async (req, res) => {
    console.log(req.params)
    try {
        const roundtable = await Roundtable.findById(req.params.id)
        roundtable.city= req.body.roundtable.city;
        roundtable.state= req.body.roundtable.state;
        roundtable.groupName= req.body.roundtable.groupName;
        roundtable.password= req.body.roundtable.password;
        roundtable.nickName= req.body.roundtable.nickName;
        roundtable.gardenList= req.body.roundtable.gardenList;
        roundtable.mission= req.body.roundtable.mission;
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