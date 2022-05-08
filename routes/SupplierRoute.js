const router = require("express").Router();
let Supplier = require("../models/Supplier");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require('../middleware/auth')

/////////////  ADD SUPPLIER ROUTE /////////////

router.route("/add").post((req,res)=>{

    const  companyID = req.body.companyID;
    const companyName = req.body.companyName;
    const address = req.body.address;
    const contactNo = req.body.contactNo;
    const email = req.body.email;
    const productCategory = req.body.productCategory;
    const productID  = req.body.productID;
    const description = req.body.description;
    const username = req.body.username;
    const password = req.body.password;
    const confirmPass = req.body.confirmPass;

    const newSupplier = new Supplier({
        companyID,
        companyName, 
        address,
        contactNo, 
        email,
        productCategory, 
        productID,
        description, 
        username,
        password,
        confirmPass
    })
    //const token = await newSupplier.generateAuthToken();
    newSupplier.save().then(() => {
        res.json("Supplier Added")
    }).catch((err)=>{
        console.log(err)
    })

})


    //login

    router.post('/login', async (req, res) => {
        try {
          const {username, password} = req.body
          const Cus = await Supplier.findByCredentials(username, password)
          const token = await Cus.generateAuthToken()
          res.status(200).send({token: token, Cus: Cus})
    
        } catch (error) {
          res.status(500).send({ error: error.message });
          console.log(error);
        }
    
      })


          //get supplier profile

    router.get("/profile", auth, async (req, res) => {
    
        try {
          res
            .status(201)
            .send({ status: "Supplier logged in", Cus: req.Cus
           });
        } catch (error) {
          res
            .status(500)
            .send({ status: "Error with /profile", error: error.message });
        }
      });
  



///////////// Get specific supplier's data /////////////

router.route('/:id').get((req,res)=>{
    let supplierID = req.params.id;

    Supplier.findById(supplierID,(err,Suppliers)=>{
        if(err){
            return res.status(400).json({success:false,err});
        }
        return res.status(200).json({
            success:true,
            Suppliers
        });
    });
 });






/////////////  GET ALL SUPPLIER DATA /////////////

router.route("/").get((req,res) => {
    Supplier.find().exec((err,supplier)=>{
        if(err){

            return res.status(400),json({

                error:err

            });

        }
    return res.status(200).json({
        success:true,
        supplier:supplier
    })
}) 
})


/////////////  UPDATE SUPPLIER DATA /////////////

router.route('/update/:id').put((req,res)=>{
    Supplier.findByIdAndUpdate(
        req.params.id,{
            $set:req.body
        },
        (err)=>{
            
            if(err){
                return res.status(400).json({error:err});
            }
            
            return res.status(200).json({
                success: "Update Successfully"
        });
    });
});



///////////////  Generate Report  ////////////////


/////////////  DELETE SUPPLIER DATA /////////////

router.route("/delete/:id").delete(async(req,res) => {
    let userId = req.params.id;

    await Supplier.findByIdAndDelete(userId).then(()=> {
        res.status(200).send({status: "user Deleted"});
    }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with delete User", error: err.message});
    })
})





/////////////  GET ONLY ONE SUPPLIER DATA /////////////

router.route("/get/:id").get(async(req,res) => {
    let userId = req.params.id;
    const user = await Supplier.findById(userId).then((Supplier) => {
        res.status(200).send({status: "User fetched", Supplier: Supplier})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get user", error: error.message});
    })
})


module.exports = router;