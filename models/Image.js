const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
const imageSchema = new Schema({
    name: String,
    desc: String,
    img:
    {
        data: Buffer,
        contentType: String
    }
});
  
//Image is a model which has a schema imageSchema

const Image = mongoose.model("Image", contactusSchema);
  
module.exports = Image;