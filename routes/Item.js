const express = require('express');
const router = express.Router();
const ITEM = require('../models/item');

router.route('/')
.get((req,res,next)=>{
    ITEM.find()
.then((itemfood)=>{
    res.json(itemfood);
}).catch((err) =>{console.log(err)});
})
.post((req,res,next)=>{
    ITEM.create(req.body)
    .then((itemfood)=>{
        res.json(itemfood);
    }).catch(next);
})
.put((req,res)=>{
    res.send("Not Supported"); 
})
 
.delete((req,res,next)=>{
    ITEM.deleteMany({})
    .then((status)=>{
        res.json(status);
    }).catch(next);
 
});

router.get('/all', (req, res, next) => {
	ITEM.find()
		.then((itemA) => {
			res.json(itemA);
		})
		.catch(next);
});

router.put('/update', (req, res, next) => {
	ITEM.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true })
		.then((itemA) => {
			res.json(itemA);
		})
		.catch(next);
	console.log({ status: 'Purchase Successful', Date: Date.now() });
});

router.delete('/itemdelete/:itemid', (req, res, next) => {
	ITEM.findByIdAndDelete(req.params.itemid)
		.then((ItemA) => {
			res.json('Successfully Deleted!');
			console.log('Successfully Deleted!');
		})
		.catch(next);
});

module.exports = router;
