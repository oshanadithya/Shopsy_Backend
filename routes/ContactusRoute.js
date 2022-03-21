const router = require("express").Router();
let Contactus  = require("../models/Contactus");
const { json } = require("express");

router.route("/addMessage").post((req,res)=>{
    const fname = req.body.fname;
    const lname = req.body.lname;
    const email = req.body.email;
    const contact = Number(req.body.contact);
    const message = req.body.message;

    const newMessage = new Contactus({
        fname,
        lname,
        email,
        contact,
        message
    });

    newMessage.save().then(()=>{
        res.json("Message Sent")
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/").get((req,res)=>{
    Contactus.find().then((message)=>{
        res.json(message)
    }).catch((err)=>{	
        console.log(err)
    });
});

module.exports = router;