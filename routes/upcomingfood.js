
const express = require('express');
const router = express.Router();
const Upcomingfood = require('../models/upcoming');

router.route('/')
.get((req,res,next)=>{
    Upcomingfood.find()
.then((upcomingfood)=>{
    res.json(upcomingfood);
}).catch((err) =>{console.log(err)});
})

.post((req,res,next)=>{
    Upcomingfood.create(req.body)
    .then((upcomingfood)=>{
        res.json(upcomingfood);
    }).catch(next);
})
.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next)=>{
    Upcomingfood.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);

});

router.route('/:id')
.get((req,res,next)=>{
    Upcomingfood.findById(req.params.id)
    .then((upcomingfood) =>{
    res.json(upcomingfood);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    Upcomingfood.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((upcomingfood) =>{
    res.json(upcomingfood);
}).catch(next);
})

.delete((req,res,next)=>{
    Upcomingfood.findByIdAndDelete(req.params.id)
    .then((upcomingfood) => {
        res.json(upcomingfood);
}).catch(next);
});


module.exports = router;