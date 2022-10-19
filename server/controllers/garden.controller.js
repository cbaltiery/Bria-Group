const router = require("express").Router()
const Garden = require("../models/garden.model")
const User = require("../models/user.model")
const validateSession = require("../middleware/validateSession")

//"register" a garden we think sounds more official RE Newport, RI proof
router.post("/register", validateSession, async (req, res) => { 
    const { gardenName, city, state, email } = req.body; //destructuing
    if (!req.body || !gardenName || !city || !state || !email) { //has body and if so, all four things??
        res.status(400).json({ message: "malformed registration data" }); //400badrequest
    } 
    try {
        let gardenTest = await Garden.findOne({ email: email }) //is garden already reg'd w/ this email?
        if (gardenTest) {
             res.status(400).json({ message: `garden already registered to ${email}` }); //400badrequest
        }    
        let garden = new Garden({ //construct garden
            gardenName,
            city,
            state,
            email,
            createdById: req.user._id,
        });
        garden.usersTable.push(req.user._id); //add creator as original member  
        garden = await garden.save();//write garden
        let user = await User.findOne({ _id: req.user._id }); //guaranteed by validateSession
        user.gardensTable.push(garden._id);
        user = await user.save();  // record the update
        return res.status(201).json({garden}); //return newGarden 201created
    } catch (error) {
        return res.status(500).json({ error: error.message });  //500internalserver error
    }
})

router.get("/getAny", async (req, res) => {
    try {
        const gardenCount = await Garden.estimatedDocumentCount();
        const randomPosition = (Math.floor(Math.random() * gardenCount));
        const garden = await Garden.findOne({
            // "isVisibile": true, //require visibility true              
            "isActive": true //require account status active
        }).skip(randomPosition);
        return res.status(200).json({ garden });  //200OK,return what's left                           
    } catch (error) {
        return res.status(500).json({ error: error.message }); //500internalservererror
    }
});

router.get("/getByEmailOrId", async (req, res)=>{ 
    const { filter } = req.query; //whicever input between ? "_id" and ? "email"
    if (filter === null || filter === "") { //if nothing passd, return
        return res.status(400).json({ message: "no email or id provided" }) //400badrequest
    }
    try {
        const garden = await Garden.findOne({
            filter,
            "isActive": true
        }) //attempt lookup
        if (garden) {
            return res.status(200).json({ garden })  //garden found, return garden 200OK
        } else {
            return res.status(400).json({ message: "garden not found" }) //error 400
        }
    } catch (error) {
        return res.status(500).json({ error: error.message })  //500internalservererror
    }
})

//, filter must be provided, garden must exist and logged-in user must be a member
router.patch("/updateByEmailOrId", validateSession, async (req, res) => {
    //find garden either through _id or email
    const { filter } = req.query; //whicever between ? "_id" and ? "email"
    if (filter === null || filter === "") { //if nothing passd, return
        return res.status(400).json({ message: "no email or id provided" }) //400badrequest
    }
    try {
        const garden = await Garden.findOne(filter); //attempt lookup
        if (garden) {
            //garden found.  is logged in user a member?
            if (garden.usersTable.indexOf(req.user._id != -1)) {
                //send update, save garde, and send back
                garden = await Garden.findOneAndUpdate(
                    { _id: garden._id }, //filter
                    req.body, //new data
                    { returnOriginal: false } //return options: return updated doc not orig
                );
                garden = garden.save()
                return res.status(200).json({ garden })  //garden found, return garden 200OK   
            } else {//indexOf === -1 => logged-in user not in list, not a member
                return res.status(400).json({ message: "must be garden member to update" }); //400badrequest   
            }
        } else {
            return res.status(400).json({ message: "garden not found" }) //error 400
        }
    } catch (error) {
        res.status(500).json({ error: error.message });  //500internalservererror
    } 
});

router.delete("/deleteByEmailOrId", validateSession, async (req, res) => {
    //find garden either through _id or email
    const { filter } = req.query; //whicever between ? "_id" and ? "email"
    if (filter === null || filter === "") { //if nothing passd, return
        return res.status(400).json({ message: "no email or id provided" }) //400badrequest
    }
    try {
        const garden = await Garden.findOne(filter); //attempt lookup
        if (garden) {
            //garden found.  is user a member AND are they the last user?
            if ((garden.usersTable.indexOf(req.user._id != -1)) && (garden.usersTable.length === 1)) {
                garden.isActive = false; //soft-delete
                garden = garden.save()
                return res.status(200).json({ garden })  //garden found, return garden 200OK   
            } else {//indexOf === -1 => logged-in user not in list, not a member
                return res.status(400).json({ message: "must be garden member to update" }); //400badrequest   
            }
        } else {
            return res.status(400).json({ message: "garden not found" }) //error 400
        }
    } catch (error) {
        res.status(500).json({ error: error.message });  //500internalservererror
    } 
});


    module.exports = router