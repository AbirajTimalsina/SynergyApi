
const express = require('express');
const router = express.Router();
const Regular = require('../models/regular');

router.route('/')
.get((req,res,next)=>{
    Regular.find()
.then((regularfood)=>{
    res.json(regularfood);
}).catch((err) =>{console.log(err)});
})

.post((req,res,next)=>{
    Regular.create(req.body)
    .then((regularfood)=>{
        res.json(regularfood);
    }).catch(next);
})
.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next)=>{
    Regular.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);

});

router.route('/:id')
.get((req,res,next)=>{
    Regular.findById(req.params.id)
    .then((regularfood) =>{
    res.json(regularfood);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    Regular.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((regularfood) =>{
    res.json(regularfood);
}).catch(next);
})

.delete((req,res,next)=>{
    Regular.findByIdAndDelete(req.params.id)
    .then((regularfood) => {
        res.json(regularfood);
}).catch(next);
});


module.exports = router;