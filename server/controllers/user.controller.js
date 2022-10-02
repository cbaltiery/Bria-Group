const router = require("express").Router();
const User = require("../models/user.model");

router.post("/createuser", async (req,res)=>{
    const user = new User(
        {userName : req.body.user.userName,
         displayName : req.body.user.displayName,
         email : req.body.user.email,
         password : req.body.user.password
});
    try {
        const newUser = await user.save();
        res.json({user : newUser});
    } catch (error) {
        res.json({message: error.message})
    }
})

router.patch("/update/:id", async (req, res) => {
    console.log(req.params)
    try {
        const user = await User.findById(req.params.id)
        user.firstName= req.body.user.firstName;
        user.lastName= req.body.user.lastName;
        user.email= req.body.user.email;
        user.password= req.body.user.password;
        user.save();
        res.json({message: "User info updated", user : user});
    } catch (error) {
        res.json({message: error.message})
    }
    
})

router.get("/getusers", async (req,res)=>{
    try {
        const user = await User.find()
        res.json({user : user})
    } catch (error) {
        res.json({message:error.message})
    }
})

router.get("/getuserby/:id", async (req,res)=>{
    try {
       const user = await User.findById(req.params.id)
       res.json({ message: "User found", user : user })
    } catch (error) {
        res.json({message:error.message})
    }
})

// router.post("/createuser/setuserbyid", async (req,res)=>{
//     try {
//         res.json({message: "Hello from setuserbyid"})
//     } catch (error) {
//         res.json({message:error.message})
//     }
// })

router.delete("/deleteuser/:id", async (req,res)=>{
    try{
        const deleteUser = await User.deleteOne({_id: req.params.id, ownerId: req.user_id,})
        res.json({message: deleteUser.deletedCount > 0 ? "User removed" : "User not found", deleteUser :deleteUser})
    } catch (error) {
        res.json({message:error.message})
    }
})

module.exports = router