const mongoose = require('mongoose');
//const { schema } = require('./Supplier');
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
//const cors = require("cors");

//supplierSchema.use(cors());

//supplierSchema.use(express.json());

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
    },

    tokens: [
        {
          token: {
            type: String,
            required: true,
          },
        },
      ]

})

// @Action - encrypt the password
supplierSchema.pre('save', async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(8);
    this.password = await bcrypt.hash(this.password, salt);
});

// @Action - Get auth token
supplierSchema.methods.generateAuthToken = async function () {
    const Supplier = this;
    const token = jwt.sign({ _id: Supplier._id }, "jwtSecret");
    Supplier.tokens = Supplier.tokens.concat({ token });
    await Supplier.save();
    return token;
  };
  
  // @Action - Find Supplier by credentials
  supplierSchema.statics.findByCredentials = async (username, password) => {
    const Supplier1 = await Supplier.findOne({ username });
    if (!Supplier1) {
      throw new Error("Please enter authorized username");
    }
    const isMatch = await bcrypt.compare(password, Supplier1.password);
    if (!isMatch) {
      throw new Error("Password is not matched");
    }
    return Supplier1;
  };
  


const Supplier = mongoose.model("Supplier", supplierSchema);

module.exports = Supplier;