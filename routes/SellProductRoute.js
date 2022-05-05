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

/////////////////////////////////////////////////Retrive single//////////////////////////////////////////////////////////////////////////

router.route("/getProduct/:id").get(async(req, res) => {
    let pid = req.params.id;
    await SellProduct.findOne({pid})
    .then((data) => {
        res.status_(200).send({status: "Product fetched"});
        res.json(data);
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get product", error: err.message});
    });
});

/////////////////////////////////////////////////Update single//////////////////////////////////////////////////////////////////////////

router.route("/updateProduct/:id").put(async(req, res)=>{
    let prid = req.params.id;
    const {pname, cname, pid, price, expdate, mandate, desc} = req.body;

    const updateProduct = {
        pname,
        cname,
        pid,
        price,
        expdate,
        mandate,
        desc
    }

    const update = await SellProduct.findByIdAndUpdate(prid, updateProduct).then(()=>{
        res.status(200).send({status: "Product updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    });
});

///////////////////////////////////////////////////////Delete///////////////////////////////////////////////////////////////////

router.route("/deleteProduct/:id").delete(async(req, res) => {
    let del = req.params.id;
    await SellProduct.findByIdAndDelete(del)
    .then(() =>{
        res.status(200).send({status: "Product deleted"});
        res.json("Product deleted!");
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete product", error: err.message})
    });
});

module.exports = router;