const express = require ('express');
const Complaints = require('../models/complaints');


const router = express.Router();


//save posts

router.post('/complaints/save',(req,res)=>{
    let newPost = new Complaints(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                
                error:err
                
            });
        }
        return res.status(200).json({
            success:"Complaint saved successfully"
        });
    });

});

//get post

router.get('/complaints',(req,res)=>{
    Complaints.find().exec((err,complaints)=>{
        if(err){
            return res.status(400).json({
                error:err
                
            });

        }
        return res.status(200).json({
            success:true,
            existingPosts:complaints
        });
    });
});


module.exports = router;