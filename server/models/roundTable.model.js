const mongoose = require("mongoose");
const RoundTableSchema = new mongoose.Schema({

        groupName: {
        type: String,
        required: true,
        unique : true,
    },
        nickName: {
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
        gardenList: {
        type: Array,
        required: true,
    },
        mission: {
        type: String,
        required: true,
    },
        public: {
        type: Boolean,       
    },
    });



module.exports = mongoose.model("RoundTable", RoundTableSchema)