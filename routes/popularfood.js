const express = require('express');
const router = express.Router();
const popularfood = require('../models/popularfood');
 
router.route('/')
.get((req,res,next)=>{
    popularfood.find()
.then((popularfood)=>{
    res.json(popularfood);
}).catch((err) =>{console.log(err)});
})
.post((req,res,next)=>{
    popularfood.create(req.body)
    .then((popularfood)=>{
        res.json(popularfood);
    }).catch(next);
})
.put((req,res)=>{
    res.send("Not Supported"); 
})
 
.delete((req,res,next)=>{
    popularfood.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);
 
});
 
module.exports = router;