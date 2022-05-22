const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({

   

    customerName : {
        type : String,
        required: true
    },
    Date : {
        type : String,
        required: true
    },
    deliveryAddress :{
        type :String,
        required:true
    },
    NoOfOrders :{
        type:Number,
        required:true
    },
    OrderID :{
        type:String,
        required:true
    },
    CustomerPhone :{
        type:String,
        required:true
    },
    driverName :{
        type:String,
        required:true
    },
    driverPhone :{
        type:String,
        required:true
    },
    vehicleNo :{
        type:String,
        required:true
    },
    deliveryStatus :{
        type:String,
        required:true
    },

    
      


});

module.exports = mongoose.model('Posts',postSchema);