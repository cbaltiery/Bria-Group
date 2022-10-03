const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    
       userName: {
        type: String,
        required: true
    },
       displayName: {
        type: String,
        required: true
    },
       email: {
        type: String,
        required: true,
        unique : true,
    },
       password: {
        type: String,
        required: true,
    },
       public: {
        type: Boolean,       
    },
    });
       

module.exports = mongoose.model("User", UserSchema)