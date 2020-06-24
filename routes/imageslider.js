
const express = require('express');
const router = express.Router();
const Imageslider = require('../models/imageslider');

router.route('/')
.get((req,res,next)=>{
    Imageslider.find()
.then((imageslider)=>{
    res.json(imageslider);
}).catch((err) =>{console.log(err)});
})

.post((req,res,next)=>{
    Imageslider.create(req.body)
    .then((imageslider)=>{
        res.json(imageslider);
    }).catch(next);
})
.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next)=>{
    Imageslider.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);

});

router.route('/:id')
.get((req,res,next)=>{
    Imageslider.findById(req.params.id)
    .then((imageslider) =>{
    res.json(imageslider);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    Imageslider.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((imageslider) =>{
    res.json(imageslider);
}).catch(next);
})

.delete((req,res,next)=>{
    Imageslider.findByIdAndDelete(req.params.id)
    .then((imageslider) => {
        res.json(imageslider);
}).catch(next);
});


module.exports = router;