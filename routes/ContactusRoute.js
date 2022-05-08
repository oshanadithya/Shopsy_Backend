const router = require("express").Router();
let ContactUs  = require("../models/Contactus");
const { json } = require("express");

router.route("/addMessage").post((req,res)=>{
    const name = req.body.name;
    const email = req.body.email;
    const subject = (req.body.subject);
    const message = req.body.message;

    const newMessage = new ContactUs({
        name,
        email,
        subject,
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