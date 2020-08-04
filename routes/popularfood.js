
const express = require('express');
const router = express.Router();
const Popularfood = require('../models/popularfood');

router.route('/')
.get((req,res,next)=>{
    Popularfood.find()
.then((popularfood)=>{
    res.json(popularfood);
}).catch((err) =>{console.log(err)});
})

.post((req,res,next)=>{
    Popularfood.create(req.body)
    .then((popularfood)=>{
        res.json(popularfood);
    }).catch(next);
})
.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next)=>{
    Popularfood.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);

});

router.route('/:id')
.get((req,res,next)=>{
    Popularfood.findById(req.params.id)
    .then((popularfood) =>{
    res.json(popularfood);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    Popularfood.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((popularfood) =>{
    res.json(popularfood);
}).catch(next);
})

.delete((req,res,next)=>{
    Popularfood.findByIdAndDelete(req.params.id)
    .then((popularfood) => {
        res.json(popularfood);
}).catch(next);
});


module.exports = router;