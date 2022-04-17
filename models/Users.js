const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({

    FirstName : {
        type : String,
        required : true
    },
    LastName : {
        type : String,
        required : true
    },
    BirthDay : {
        type : Date,
        required : true
    },
    PhoneNo : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    Gender : {
        type : String,
        required : true
    },
    Password : {
        type : String,
        required : true
    },
})

const User = mongoose.model("User", userSchema);

module.exports = User;