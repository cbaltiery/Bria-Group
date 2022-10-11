const router = require("express").Router();
const User = require("../models/user.model");
const fetch = require("node-fetch");

router.get("/getiNaturalistSpecies/:id", async (req,res)=>{
    
    let requestHeaders = new Headers();
    requestHeaders.append("Application-Type", "javascript/json")
        requestOptions = {method: "GET", headers: requestHeaders};
    
    try {
        //request daily iNatToken, then append to headers as authorization
        let response = await fetch("https://www.inaturalist.org/users/api_token", requestOptions),
            data = await response.json();
        requestHeaders.append("Authorization", data.api_token);
        
        //pull the iNatUserProfile from GET /users/:id endpoint
        let endpointUrl = `https://api.inaturalist.org/v1/observations/species_counts?user_id=${req.params.id}&native=true&per_page=0`;
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
        res.status(400).json({error: error})
    }
})







router.get("/geteBirdSpeciesCount/:id", async (req,res)=>{
    
    req.params.id = "MzQxNjU3MA";

    const searchTerm = "StatsIcon-stat-count"; //count begings 22 spaces from index
        
    let requestHeaders = new Headers();
    let requestOptions = {method: "GET", headers: requestHeaders};
    
    //try {
        //simple get to return profile page
        let response = await fetch(`https://ebird.org/profile/${req.params.id}`, requestOptions),
            data = await response.text();

        let pos = data.search(searchTerm) + 23,
            slice = data.slice(pos, pos+7),
        
        //23 is offset from beginning of searchTerm to the first digit of the count
            num = parseInt(slice[pos]);

        
        console.log(num);
    
    apiKey = "v4ba40gpd063" //had to make free developer account to get this
    // try {
    //     res.json({message: "Hello from get eBirdSpeciesCount"})
    // } catch (error) {
    //     res.json({message:error.message})
    // }
})




router.get("/getBugBounty", async (req,res)=>{
    try {
        res.json({message: "Hello from getBugBounty"})
    } catch (error) {
        res.json({message:error.message})
    }
})

//epaApiKey  XcG7zwVwPItaicv1FSfffyZ2ozxyMeD7Deox2ib1

module.exports = router;