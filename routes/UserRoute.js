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

  //user email check route

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
  
  //getting one person Detail

router.route("/get_one/:id").get(async(req,res)=>{s
    const user = req.params.Email;
    const itin = await user.findById(user).then(()=>{
        res.status(200).send({status : "get Insurence Package Details" , data : itin});
    }).catch((err)=>{
        res.status(500).send({status : "getting unsuccesful!"});
    });
  });

  //update Route
router.route('/update-user/:Email').put(async (req, res) => {

  const updates = req.body;

  let Email = req.params.Email;

  console.log(updates);

  await user.findOneAndUpdate({Email}, updates)
  .then(() => {
    res.json("Updated Sucessfully!");
  })
  .catch((err) => {
    console.log(err);
  });
});




  
  module.exports = router;