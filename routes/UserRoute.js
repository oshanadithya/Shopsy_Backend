const router = require("express").Router();
let User  = require("../models/Users.js");
const { json } = require("express");

//user account creating route
router.route("/add").post((req, res) => {
    const {
      FirstName,
      LastName,
      BirthDay,
      PhoneNo,
      Email,
      Gender,
      Password,
    } = req.body;
  
    const user = new User({
        FirstName,
        LastName,
        BirthDay,
        PhoneNo,
        Email,
        Gender,
        Password,
    });
  
    user
      .save()
      .then(() => {
        res.json("Account created!");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //user data retrive route

  router.route("/").get((req, res) => {
    User.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  //user email retrive route

  router.route("/get/:email").get((req, res) => {
    const email = req.params.Email;
  
    User.findOne({ email })
      .then((data) => {
        res.json(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });