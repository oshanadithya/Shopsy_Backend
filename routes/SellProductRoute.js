const router = require("express").Router();
let SellProduct  = require("../models/SellProduct");
const { json } = require("express");

router.route("/addProduct").post((req,res)=>{
    const pname = req.body.pname;
    const cname = req.body.cname;
    const pid = req.body.pid;
    const price = req.body.price;
    const expdate = (req.body.expdate);
    const mandate = (req.body.mandate);
    const desc = (req.body.desc);

    const newProduct = new SellProduct({
        pname,
        cname,
        pid ,
        price,
        expdate,
        mandate,
        desc
    });

    newProduct.save().then(()=>{
        res.json("Product Added")
    }).catch((err)=>{
        console.log(err);
    });

});

router.route("/").get((req,res)=>{
    SellProduct.find().then((pname)=>{
        res.json(pname)
    }).catch((err)=>{	
        console.log(err)
    });
});



module.exports = router;