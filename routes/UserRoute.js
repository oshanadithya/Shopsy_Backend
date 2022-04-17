const router = require("express").Router();
let User  = require("../models/Users.js");

//user account creating route
router.route("/add").post((req, res) => {
    const {
        FirstName,
        LastName,
        BirthDay,
        PhoneNo,
        Email,
        Gender,
        Password
    } = req.body;
  
    const user = new User({
        FirstName,
        LastName,
        BirthDay,
        PhoneNo,
        Email,
        Gender,
        Password
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

  router.route("/check/:Email").get(async (req, res) => {
    const Email = req.params.Email;
    await User.exists({ Email })
      .then((data) => {
        res.json(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

 // email retrive route
 
 router.route("/get/:Email").get((req, res) => {
    const Email = req.params.Email;
  
    User.findOne({ Email })
      .then((data) => {
        res.json(data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });
  
  
  
  module.exports = router;