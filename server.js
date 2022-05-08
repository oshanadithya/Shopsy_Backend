//Database Connection
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.port || 8070;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("Mongo DB connection success!");
});
const { connect } = require("mongodb");

app.listen(PORT, () => {
  console.log(`Server is up and running on port number ${PORT}`);
});

//----------------------- Begin ----------------------------------//

const ContactUs = require("./routes/ContactusRoute");
const SellProduct = require("./routes/SellProductRoute");

//---------------------------------------------------------------//

app.use("/ContactUs", ContactUs);
app.use("/SellProduct", SellProduct);

//------------------------ End ----------------------------------//

