
const express = require('express');
const router = express.Router();
const NewDishes = require('../models/newdishes');

router.route('/')
.get((req,res,next)=>{
    NewDishes.find()
.then((newdishes)=>{
    res.json(newdishes);
}).catch((err) =>{console.log(err)});
})

.post((req,res,next)=>{
    NewDishes.create(req.body)
    .then((newdishes)=>{
        res.json(newdishes);
    }).catch(next);
})
.put((req,res)=>{
    res.send("Not Supported"); 
})

.delete((req,res,next)=>{
    NewDishes.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);

});

router.route('/:id')
.get((req,res,next)=>{
    NewDishes.findById(req.params.id)
    .then((newdishes) =>{
    res.json(newdishes);
}).catch(next);
})

.post((req,res)=>{
    res.send("Not Supported");
})

.put((req,res,next)=>{
    NewDishes.findByIdAndUpdate(req.params.id, { $set:req.body },{ new:true })
    .then((newdishes) =>{
    res.json(newdishes);
}).catch(next);
})

.delete((req,res,next)=>{
    NewDishes.findByIdAndDelete(req.params.id)
    .then((newdishes) => {
        res.json(newdishes);
}).catch(next);
});


module.exports = router;