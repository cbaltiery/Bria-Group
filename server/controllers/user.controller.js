const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require ("jsonwebtoken");

router.post("/createuser", async (req,res)=>{
    const user = new User(
        {userName : req.body.user.userName,
         displayName : req.body.user.displayName,
         email : req.body.user.email,
         password : bcrypt.hashSync (req.body.user.password, 10)
});
    try {
        const newUser = await user.save();
        let token = jwt.sign({id: newUser._id}, process.env.JWT, {expiresIn: 60*60*24})
        res.json({user : newUser, token : token});
    } catch (error) {
        res.json({message: error.message})
    }
})

router.post("/login", async (req, res) => {
    console.log(req.body.user.email)
    try{
    const user =  await User.findOne({email : req.body.user.email})
    if (user){
        const passwordsMatch = await bcrypt.compare(
            req.body.user.password,
            user.password
          );
          console.log(passwordsMatch);
          if (passwordsMatch) {
            let token = jwt.sign({id: user._id}, process.env.JWT, {expiresIn: 60*60*24})
            res.json({ message: "user found", user: user, token : token });
          } else {
            res.json({ message: "password mismatch" });
          }
        } else {
          res.json({ message: "user not found", user: user });
        }
      } catch (error) {
        res.json({ message: error.message });
      }
    });

router.patch("/update/:id", async (req, res) => {
    console.log(req.params)
    try {
        const user = await User.findById(req.params.id)
        user.userName= req.body.user.userName;
        user.displayName= req.body.user.displayName;
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