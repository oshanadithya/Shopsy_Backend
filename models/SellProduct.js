const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const sellproductschema = new Schema ({
    pname : {
      type : String,
      required : true  
    },  
    cname : {
        type : String,
        required : true  
    },
    pid : {
        type : String,
        required : true  
    },
    price : {
        type : String,
        required : true
    },
    expdate : {
        type : Date,
        required : true  
    },
    mandate : {
        type : Date,
        required : true  
    },
    desc : {
        type : String,
        required : true  
    }

})

const Sellproduct = mongoose.model("Sellproduct", sellproductschema);
module.exports = Sellproduct;