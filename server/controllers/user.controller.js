const bcrypt = require("bcrypt");
const router = require("express").Router();
const jwt    = require("jsonwebtoken");
const fetch  = require("node-fetch");
const validateSession = require("../middleware/validateSession");
const User = require("../models/user.model");
const Garden = require("../models/garden.model")


router.post("/register", async (req, res) => {
    const { username, email, password } = req.body; v
    if (!req.body || !username || !email || !password) {//if not enough info passed, return error   
        return res.status(400).json({ message: "malformed user registration data sent" }); //400badrequest
    }
    try {
        const userFound = await User.findOne({ email }); v //is already a user?
        if (userFound) {  //if so, return 
            return res.status(400).json({ message: "user already exists" })
        }
        const salt = await bcrypt.genSalt(10);  //salt and hash password
        const hashedPassword = await bcrypt.hash(password, salt);//bcrypt rec's async 'hash' server-side

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        });
        newUser = await newUser.save(); //add new user to database
        return res.status(201).json({ newUser }); //return newUser 201created
    } catch (error) {
        return res.status(500).json({ error: error.message });  //500internalserver error
    }
});

router.post("/login", async (req, res) => {
    const { email, password } = req.body;  //object destructuring
    if (!req.body || !email || !password) { //if not enough info passed, return error
        return res.status(400).json({ message: "malformed credentials sent" }); //400badrequest
    }
    try{
        const user = await User.findOne({ email }) //lookup user by email
        if (user){ //test if user was found.  no tokens yet!
            const passwordsMatch = await bcrypt.compare(password, user.password); //and do pw's match?
            if (passwordsMatch) { //user definitely found, create tokem
                let token = jwt.sign({id: user._id}, process.env.JWT_KEY, {expiresIn: '240h'})//duration?
                return res.status(200).json({ token }); //24hour token //200OK
            } else {
                return res.status(401).json({ message: `incorrect password` });  //401wrong credentials
            }
        } else {
            return res.status(404).json({ message: `${email} not found` });  //404 not found
        }
      } catch (error) {
            return res.status(500).json({ error: error.message }); //500internalservererror
      }
});

router.post("/addGarden", validateSession, async (req, res) => {
    
    const { gardenId } = req.query.gardenId;
    //was a garden passed as?
    if (gardenId === null || gardenId === "") { //if nothing passd, return
        return res.status(400).json({ message: "gardenId not provided" }) //400badrequest
    }
    //does garden exist
    try {
        const garden = await Garden.findOne({ _id: gardenId }) //attempt lookup
        if (garden) {
            //pullup user record and input gardenId
            const user = await User.findOne({ _id: req.user._id })
            if (user.gardensTable.indexOf(gardenId) === -1) { //not in list?
                user.gardensTable.push(gardenId); //add garden to user
                garden.usersTable.push(rec.user._id); //add user to garden
                garden = await garden.save();
                user = await user.save();//save it
                return res.status(200).json({ user })  //return 200OK
            } else {
                return res.status(400).json({ message: "user already member of garden" })  //user already in list 400bad
            }
        } else {
            return res.status(400).json({ message: "garden not found" }) //error 400
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })  //500internalservererror
    }
});

router.get("/getAny", async (req, res) => {
    try {
        const userCount = await User.estimatedDocumentCount();
        const randomPosition = (Math.floor(Math.random() * userCount)); //0 incl to userCount excl 
        const user = await User.findOne({
            "isVisibile": true, //require visibility true              
            "isActive": true //requrie status active (aka not soft deleted)
        }).skip(randomPosition);
        return res.status(200).json({ user });  //200OK                                          
    } catch (error) {
        return res.status(500).json({ error: error.message }); //500internalservererror
    }
});

router.get("/getSelf", validateSession, async (req, res) => {
    try {
        const user = await User.findOne({ _id: req.user._id }) //logged in so must find
        return res.status(200).json({ user })  //user found, return user 200OK
    } catch (error) {
        return res.status(500).json({ error: error.message })  //500internalservererror
    }
});

router.get("/getByEmailOrId", async (req, res) => {
    const { filter } = req.query; //whicever between ? "_id" and ? "email"
    if (filter === null || filter === "") { //if nothing passd, return
        return res.status(400).json({ message: "no email or id provided" }) //400badrequest
    }
    try {
        const user = await User.findOne(filter) //attempt lookup
        if (user) {
            return res.status(200).json({ user })  //user found, return user 200OK
        } else {
            return res.status(400).json({ message: "input not found" }) //error 400
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })  //500internalservererror
    }
});

router.patch("/update", validateSession, async (req, res) => {
    if (req.body === null || req.body === "") { //if nothing passd, return
        return res.status(400).json({ message: "no updated data sent" }) //400badrequest
    }
    try {
        let user = await User.findOneAndUpdate(
            { _id: req.user._id }, //filter
            req.body, //new data
            { returnOriginal: false } //return options: return updated doc not orig
        );
        user = await user.save();  // record the update
        res.status(200).json({ user }); //200 OK
    } catch (error) {
        res.status(500).json({ error: error.message });  //500internalservererror
    } 
});

router.delete("/removeGarden", validateSession, async (req, res) => {
    const { gardenId } = req.query.gardenId;
    //was a garden passed as?
    if (gardenId === null || gardenId === "") { //if nothing passd, return
        return res.status(400).json({ message: "gardenId not provided" }) //400badrequest
    }
    //does garden exist
    try {
        const garden = await Garden.findOne({ _id: gardenId }) //attempt lookup
        if (garden) {
            //pullup user record and remove gardenId
            const user = await User.findOne({ _id: req.user._id })
            if (user.gardensTable.indexOf(gardenId) === -1) { //not in list?
                user.gardensTable = user.gardensTable.filter(item => item != gardenId); //remove garden from user
                garden.usersTable - garden.usersTable.filter(item => item != req.user._id);  //remove user from garden
                garden = await garden.save()
                user = await user.save();
                return res.status(200).json({ user })  //return 200OK
            } else {
                return res.status(600).json({ message: "user already member of garden" })  //user already in list
            }
        } else {
            return res.status(400).json({ message: "garden not found" }) //error 400
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })  //500internalservererror
    }
});

router.delete("/delete", validateSession, async (req, res) => {
    try {
        const user = await User.find({ _id: req.user._id });//look them up 
        req.user.isActive = false;  //sot delete set here only (aka not userUpdate())
        await user.save();

        return res.status(200).json({message: "user deleted" }); //200OK //soft delete only
    } catch (error) {
        return res.status(500).json({ error: error.message });  //500internalservererror
    }
});

router.post("/getiNaturalistData", validateSession, async (req, res) => {

    try {
        let user = await User.find({ email: req.user.email });//look them up
        if (!user) { //not found
            return res.status(400).json({ message: "user not found" });  //400badrequest
        }

        const iNatId = user.certifications.iNaturalist.uId;

        let requestOptions = {
                method: "GET",
                headers: new Headers().append("Application-Type", "javascript/json")
            };
        append
        
        //request daily iNatToken, then append to headers as authorization
        let response = await fetch("https://www.inaturalist.org/users/api_token", requestOptions),
            data = await response.json();  //convert to json-form of token
        requestOptions.headers.append("Authorization", data.api_token); //now authorized for POST interactions
        
        //pull the iNatUserProfile from GET /users/:id endpoint
        let endpointUrl = `https://api.inaturalist.org/v1/observations/species_counts?user_id=${iNatId}&native=true&per_page=0`;
            response = await fetch(endpointUrl, requestOptions);
            data = response.json();

        //inject iNat data into user document
        let updatedUserDoc = await User.findByIdAndUpdate({_id: req.user._id},
        {$set:{
            "apiData.iNaturalistId": req.params.id,
            "apiData.iNaturalistSpeciesCount": data.total_results
        }},
        {new: true});

    } catch (error) {
        console.error(error)
        return res.status(500).json({userGetiNaturalistData: error. message})
    }



});

module.exports = router