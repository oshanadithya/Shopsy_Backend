//Database Connection
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

const PORT = process.env.port || 8070;

const postRoutes = require('./routes/delivery');
const complaintRoutes = require('./routes/complaints');

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(postRoutes);
app.use(complaintRoutes);

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

const complaintsRouter = require("./routes/ComplaintRoute");
const contactus = require("./routes/ContactusRoute");
const supplierRouter = require("./routes/SupplierRoute.js");
const report = require("./routes/SupplierReport")

app.use("/complaint", complaintsRouter );
app.use("/contactus", contactus);
app.use("/Supplier", supplierRouter);
app.use( report)

app.listen(PORT, () => {
  console.log(`Server is up and running on port number ${PORT}`);
});

//----------------------- Begin ----------------------------------//

const ContactUs = require("./routes/ContactusRoute");
const Users = require("./routes/UserRoute");


//---------------------------------------------------------------//

app.use("/ContactUs", ContactUs);
app.use("/users", Users);

//------------------------ End ----------------------------------//
