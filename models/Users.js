const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({

    firstname : {
        type : String,
        required : true
    },
    lastname : {
        type : String,
        required : true
    },
    birthday : {
        type : Date,
        required : true
    },
    phonenumber : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    gender : {
        type : String,
        required : true
    },
    passWord : {
        type : String,
        required : true
    },
    accountType : {
        type : String,
        required : true
    },
    

})

const User = mongoose.model("User", userSchema);

module.exports = User;