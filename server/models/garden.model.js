const mongoose = require("mongoose");
const GardenSchema = new mongoose.Schema({
       email: {
        type: String,
        required: true,
        unique : true,
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
    });



module.exports = mongoose.model("Garden", GardenSchema)