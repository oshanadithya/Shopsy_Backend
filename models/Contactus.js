const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contactusSchema = new Schema({
    fname : {
        type : String,
        required : true
    },
     lname : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    contact : {
        type : Number,
        required : true
    },
    message : {
        type : String,
        required : true
    }

})

const Contactus = mongoose.model("Contactus", contactusSchema);

module.exports = Contactus;