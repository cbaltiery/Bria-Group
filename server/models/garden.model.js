const mongoose = require("mongoose");
const GardenSchema = new mongoose.Schema({
        gardenName: {
        type: String,
        required: true,
        unique : true,
    },
        gardenNickname: {
        type: String,
    },
        password: {
        type: String,
        required: true,      
    },
        city: {
        type: String,
        required: true,
    },
        state: {
        type: String,
        required: true,
    },
        roundtable: {
        type: Boolean | String,       
    },
        sqFootage: {
        type: Number, 
        required: true,      
    },
        memberNames: {
        type: Array,
        required: true,      
    },

    });



module.exports = mongoose.model("Garden", GardenSchema)