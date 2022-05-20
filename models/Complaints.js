const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const complaintSchema = new Schema({
    name : {
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
    select : {
        type : String,
        required : true
    },
    complaint : {
        type : String,
        required : true
    },
    date : { 
        type : Date,
        required : true
    }

})

const Complaint = mongoose.model("Complaint", complaintSchema);

module.exports = Complaint;