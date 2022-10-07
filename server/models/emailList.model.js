const mongoose = require("mongoose");
const EmailListSchema = new mongoose.Schema({
    
       email: {
        type: String,
        required: true,
        unique : true,
    },
});

    module.exports = mongoose.model("EmailList", EmailListSchema)