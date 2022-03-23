const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const contactusSchema = new Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    subject : {
        type : String,
        required : true
    },
    message : {
        type : String,
        required : true
    }

})

const ContactUs = mongoose.model("ContactUs", contactusSchema);

module.exports = ContactUs;