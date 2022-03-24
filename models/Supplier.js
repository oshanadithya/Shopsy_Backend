const mongoose = require('mongoose');
//const { schema } = require('./Supplier');
const Schema = mongoose.Schema;

const supplierSchema = new Schema({

    companyID : {
        type : String,
        required : true
    },
    companyName : {
        type : String,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    contactNo : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    productCategory : {
        type : String,
        required : true
    },
    productID : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    priceRange : {
        type : Number,
        required : true
    },
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    confirmPass : {
        type : String,
        required : true
    }

})


const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;