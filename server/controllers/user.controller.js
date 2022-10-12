require ("dotenv").config()
const router = require("express").Router();
const User = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require ("jsonwebtoken");
const validateSessions = require("../middleware/validate-sessions")

router.post("/register", async (req, res) => {  //used to be /createuser
    
    //object destructuring
    const { username, email, password } = req.body;

    if (!req.body || !username || !email || !password) {
        //if not enough info passed, return error
        res.status(400).json({ message: "malformed registration data sent" }); //400badrequest
    }
    try {
        //"salting" adds protection
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //bcrypt recommends async 'hash', not 'hashSync' if server-side

        const user = new User({  //
                username,
                email,
                password: hashedPassword
            });
    
        const newUser = await user.save(); //add new user to database
        //removed token generation in /register; user must log in for token
        res.status(201).json({user : newUser}); //return newUser 201created
    } catch (error) {
        res.status(500).json({ message: error.message });  //500internalserver error
    }
})

router.post("/login", async (req, res) => {


    //object destructuring
    const { email, password } = req.body;

    if (!req.body || !email || !password) { //if not enough info passed, return error
        res.status(400).json({ message: "malformed credentials sent" }); //400badrequest
    }

    try{
        const user = await User.findOne({ email }) //lookup user by email
        
        if (user){ //if user exists
            const passwordsMatch = await bcrypt.compare(password, user.password);
    
            if (passwordsMatch) { //passwords match, user found!, create 24hour logged-in token
                let token = jwt.sign({id: user._id}, process.env.JWT_KEY, {expiresIn: '24h'})
                res.status(200).json({ user: user, token : token }); //return logged-in user and 24hour token //200OK
            } else {
                res.status(401).json({ message: `incorrect password for ${email}`});  //401wrong credentials
            }
            } else {
            res.status(404).json({ message: `${email} doesn't exist` });  //404 not found
            }
      } catch (error) {
        res.status(500).json({ message: error.message}); //500internalservererror
      }
    });

router.patch("/update/:id", validateSessions, async (req, res) => {

    //this code only runs if logged-in token exists, so we have user in req.body

    //

    //user is trying to change someone else's profile AND not bria admin
    if (req.username != req.user.username && !req.user.properties.isBriaAdmin) {
        res.status(401).json({ message: "cannot modify another user unless admin" })
    }
    //user intendds to edit themselves or isBriaAdmin === true   

    try {
        const user = await User.findOne({ email: req.body.email }); //retrieve user from database

        //if not empty and contains data, assign it to the record.  this will work for any data
        //as long as user is logged in and parameter is named correctly vis UserSchema

        //all from UserSchema.  when that gets updated, so must this
        if (req.body.displayName) { user.displayName = req.body.displayName; };
        if (req.body.profilePictureUrl) { user.profilePictureUrl = req.body.profilePictureUrl; };
        if (req.body.coverPictureUrl) { user.coverPictureUrl = req.body.coverPictureUrl; };
        if (req.body.aboutBlurb) { user.aboutBlurb = req.body.aboutBlurb; };

        //properties        
        if (req.body.properties.isUserBriaAdmin) { user.properties.isUserBriaAdmin = req.body.properties.isUserBriaAdmin; };
        if (req.body.properties.isUserEmailVerfied) { user.properties.isUserEmailVerfied = req.body.properties.isUserEmailVerfied; };
        if (req.body.properties.isProfileActive) { user.properties.isProfileActive = req.body.properties.isProfileActive; };
        if (req.body.properties.isProfilePrivate) { user.properties.isProfilePrivate = req.body.properties.isProfilePrivate; };
        if (req.body.properties.isProfileVisibile) { user.properties.isProfileVisibile = req.body.properties.isProfileVisibile; };

        //location
        if (req.body.location.city) { userbody.location.city = req.body.location.city; };
        if (req.body.location.state) { userbody.location.state = req.body.location.state; };
        if (req.body.location.country) { userbody.location.country = req.body.location.country; };
        if (req.body.location.longitude) { userbody.location.longitude = req.body.location.longitude; };
        if (req.body.location.latitude) { userbody.location.latitude = req.body.location.latitude; };

        // //certifications
        // //Budburst
        // if (req.body.certifications.Budburst.uId) { userbody.certifications.Budburst.uId = req.body.certifications.Budburst.uId; };
        // if (req.body.certifications.Budburst.speciesCount) { userbody.certifications.Budburst.speciesCount = req.body.certifications.Budburst.speciesCount; };
        // if (req.body.certifications.Budburst.when_Budburst_I) { userbody.certifications.Budburst.when_Budburst_I = req.body.certifications.Budburst.when_Budburst_I; };
        // if (req.body.certifications.Budburst.when_Budburst_II) { userbody.certifications.Budburst.when_Budburst_II = req.body.certifications.Budburst.when_Budburst_II; };

        // //eBird       
        // if (req.body.certifications.eBird.uId) { userbody.certifications.eBird.uId = req.body.certifications.eBird.uId; };
        // if (req.body.certifications.eBird.speciesCount) { userbody.certifications.eBird.speciesCount = req.body.certifications.eBird.speciesCount; };
        // if (req.body.certifications.eBird.when_eBird_I) { userbody.certifications.eBird.when_eBird_I = req.body.certifications.eBird.when_eBird_I; };

        // //iNaturalist
        // if (req.body.certifications.iNaturalist.uId) { userbody.certifications.iNaturalist.uId = req.body.certifications.iNaturalist.uId; };
        // if (req.body.certifications.iNaturalist.speciesCount) { userbody.certifications.iNaturalist.speciesCount = req.body.certifications.iNaturalist.speciesCount; };
        // if (req.body.certifications.iNaturalist.when_iNaturalist_I) { userbody.certifications.iNaturalist.when_iNaturalist_I = req.body.certifications.iNaturalist.when_iNaturalist_I; };
        // if (req.body.certifications.iNaturalist.when_iNaturalist_II) { userbody.certifications.iNaturalist.when_iNaturalist_II = req.body.certifications.iNaturalist.when_iNaturalist_II; };

        user.save();
        res.status(200).json({message: "user updated", user : user}); //200 OK
    } catch (error) {
        res.status(500).json({ message: error.message });  //500internalservererror
    }
    
})

router.get("/getUsers/:count", validateSessions, async (req, res) => {  //returns all or first #count users up to 100
// /getusers/10 returns first 10
// /getusers defaults to return first 100

    //if a count exists AND is less than zero
    if (req.params.count && req.params.count <= 0) { 
        res.status(400).json({ message: "invalid request" }); //400badrequest
    }

    if (req.params.count > 100) { req.params.count = 100; };  //limit to 100 if > 100
    
    try {
        let user; 
        
        if (req.params.count) { //is there a count?  if so it must be >0, <100
            users = await User.find().limit(count); //return only that many
        }
        else { //
            users = await User.find().limit(100);  //users are big objects, limit at 100
        }

        //remove private and invisible users

        users.forEach(function(user){ //foreach, if inactive or invisibile
            if (!user.properties.isProfileActive || !user.properties.isProfileVisibile) { 
                delete users[user]; //don't return these users to UI
            }
        });

        res.status(200).json({ users: users });  //200OK,return what's left
    } catch (error) {
        res.status(500).json({ message: error.message}); //500internalservererror
    }
})

router.get("/getUserById/:id", validateSessions, async (req, res)=>{
    
    try {
        const user = await User.findById(req.params.id) //look them up
        
        //error check:  if nonexistent, inactive or invisible, return
        if (!user || !user.properties.isProfileActive || !user.properties.isProfileVisibile){
            res.status(400).json({ message: "user not found" });  //400badrequest
        }

        res.statusjson({ user : user })
    } catch (error) {
        res.status(500).json({message:error.message})  //500internalservererror
    }
})

router.delete("/deleteUserById/:id", validateSessions, async (req, res) => {
    
    //delete no longer deletes from the database.  if we find the user, update the status flag
    
    // try {
    //     const deleteUser = await User.deleteOne({_id: req.params.id, ownerId: req.user_id,})
    //     res.json({message: deleteUser.deletedCount > 0 ? "User removed" : "User not found", deleteUser :deleteUser})
    // } catch (error) {
    //     res.json({message:error.message})
    // }

    //user is trying to change someone else's profile AND not bria admin
    if (req.username != req.user.username && !req.user.properties.isBriaAdmin) {
        res.status(401).json({ message: "cannot modify another user unless admin" })
    }
    //user intendds to edit themselves or isBriaAdmin === true 

    try {
        const user = await User.findById(req.params.id) //look them up
        
        //error check:  if nonexistent
        if (!user) {
            res.status(400).json({ message: "user not found" });  //400badrequest
        }
        //this prevents profile from being returned
        user.properties.isProfileActive = false;
        user.save();
        res.status(200).json({ message: "user deleted" }) //200OK
    } catch (error) {
        res.status(500).json({ message: error.message })  //500internalservererror
    }
});

router.post("/getiNaturalistData/:iNatId", validateSessions, async (req, res) => {



});

module.exports = router