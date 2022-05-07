const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({

   

    customerName : {
        type : String,
        required: true
    },
    complaintId : {
        type : String,
        required: true
    },
    emailAddress :{
        type :String,
        required:true
    },
    contactNo :{
        type:Number,
        required:true
    },
    Date :{
        type:String,
        required:true
    },
    TypeOfComplaint :{
        type:String,
        required:true
    },
    Complaint :{
        type:String,
        required:true
    },
   

    
      


});

module.exports = mongoose.model('Complaints',complaintSchema);