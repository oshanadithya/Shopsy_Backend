const express = require ('express');
const Posts = require('../models/delivery');


const router = express.Router();


//save posts

router.post('/delivery/save',(req,res)=>{
    let newPost = new Posts(req.body);

    newPost.save((err)=>{
        if(err){
            return res.status(400).json({
                
                error:err
                
            });
        }
        return res.status(200).json({
            success:"Delivery saved successfully"
        });
    });

});

//get post

router.get('/delivery',(req,res)=>{
    Posts.find().exec((err,delivery)=>{
        if(err){
            return res.status(400).json({
                error:err
                
            });

        }
        return res.status(200).json({
            success:true,
            existingPosts:delivery
        });
    });
});

//get a specific delivery

router.get("/delivery/:id",(req,res)=>{
    let postId = req.params.id;

    Posts.findById(postId,(err,post)=>{
        if(err){
            return res.status(400).json(
                {
                    success:false,err
                });
        }
        return res.status(200).json({
            success:true,
            post
        });
    });
});



//update posts

router.put('/delivery/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
        req.params.id,
        {
            $set:req.body
        },
        (err,post)=>{
            if(err){
                return res.status(400).json({
                    error:err
                });
            }
            return res.status(200).json({
                
                success:"Updated Successfully"
            });
        }
    );
});

//delete

router.delete('/delivery/delete/:id',(req,res)=>{
    Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost)=>{
        if(err) return res.status(400).json({
            message:"Delete unsuccessful",err
        });

        return res.json({
            message:"Delete Successfull",deletedPost
           
        })
    });

   
});



module.exports = router;
