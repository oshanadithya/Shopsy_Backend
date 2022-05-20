const router = require("express").Router();
let Complaint  = require("../models/Complaints");
const { json } = require("express");

//////////////////////////////////////////////////////////Add Complaint(create)////////////////////////////////////////////////

router.route("/addComplaint").post((req,res)=>{

    const name = req.body.name;
    const email = req.body.email;
    const contact = Number(req.body.contact);
    const select = req.body.select;
    const complaint = req.body.complaint;
    const date = req.body.date;

    const newComplaint = new Complaint({

        name,
        email,
        contact,
        select,
        complaint,
        date
    });

    newComplaint.save()
    .then(()=>{
        res.json("Complaint Added")
    }).catch((err)=>{
        console.log(err);
    });

});

/////////////////////////////////////////////////////////get complaints(retirieve)///////////////////////////////////////////////

router.route("/").get((req,res)=>{
    Complaint.find().then((complaint)=>{
        res.json(complaint)
    }).catch((err)=>{	
        console.log(err);
    });
});



/////////////////////////////////////////////////Update//////////////////////////////////////////////////////////////////////////

router.route("/updateComplaint/:id").put(async(req, res)=>{
    let TourID = req.params.id;
    const {tourID, name, email, contact, select, complaint} = req.body;

    const updateComplaint = {
        tourID,
        name,
        email,
        contact,
        select,
        complaint
    }

    const update = await Complaint.findByIdAndUpdate(TourID, updateComplaint).then(()=>{
        res.status(200).send({status: "Complaint updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status: "Error with updating data"});
    });
});


///////////////////////////////////////////////////////Delete///////////////////////////////////////////////////////////////////

router.route("/deleteComplaint/:id").delete(async(req, res) => {
    let del = req.params.id;
    await Complaint.findByIdAndDelete(del)
    .then(() =>{
        res.status(200).send({status: "Complaint deleted"});
        res.json("Complaint deleted!");
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status: "Error with delete complaint", error: err.message})
    });
});

router.route("/getComplaint/:id").get(async(req, res) => {
    let TourID = req.params.id;
    const Tour = await Complaint.findById(TourID)
    .then(() => {
        res.status_(200).send({status: "Complaint fetched"})
    }).catch(() => {
        console.log(err.message);
        res.status(500).send({status: "Error with get complaint", error: err.message});
    });
});

module.exports = router;