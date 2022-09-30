const mongoose = require("mongoose");
const RoundTableSchema = new mongoose.Schema({

        groupName: {
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



module.exports = mongoose.model("RoundTable", RoundTableSchema)