const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const userSchema = new Schema({

    OrderID : {
        type : String,
        required : true
    },
    CustomerEmail : {
        type : String,
        required : true
    },
    OrderName : {
        type : String,
        required : true
    },
    Quantity : {
        type : String,
        required : true
    },
    Price : {
        type : String,
        required : true
    },
    Date : {
        type : String,
        required : true
    },

    
})

const BuyHistory = mongoose.model("BuyHistory", userSchema);

module.exports = BuyHistory;