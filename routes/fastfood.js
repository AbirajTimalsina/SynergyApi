const express = require('express');
const router = express.Router();
const fastfood = require('../models/fastfood');
 
router.route('/')
.get((req,res,next)=>{
    fastfood.find()
.then((fastfood)=>{
    res.json(fastfood);
}).catch((err) =>{console.log(err)});
})
.post((req,res,next)=>{
    fastfood.create(req.body)
    .then((fastfood)=>{
        res.json(fastfood);
    }).catch(next);
})
.put((req,res)=>{
    res.send("Not Supported"); 
})
 
.delete((req,res,next)=>{
    fastfood.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);
 
});
 
module.exports = router;