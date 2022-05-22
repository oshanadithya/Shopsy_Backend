const router = require("express").Router();
let BuyHistory = require("../models/BuyHistory");

//report get function
router.route("/").get((req, res) => {
    BuyHistory.find()
      .then((data) => {
        res.json(data);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.route("/add").post((req, res) => {
    const {
        OrderID,
        CustomerEmail,
        OrderName,
        Quantity,
        Price,
        Date

    } = req.body;
  
    const buyhistory = new BuyHistory({
        OrderID,
        CustomerEmail,
        OrderName,
        Quantity,
        Price,
        Date
    });
  
    buyhistory
      .save()
      .then(() => {
        res.json("History created!");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  router.route("/delete-history/:id").delete(async(req, res) => {
    let del = req.params.id;
    await BuyHistory.findByIdAndDelete(del)
    .then(() =>{
        res.json("Record deleted!");
    }).catch((err)=>{
        console.log(err.message);
    });
});


  module.exports = router;