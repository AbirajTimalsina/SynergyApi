const express = require('express');
const router = express.Router();
const ITEM = require('../models/item');

router.post('/', (req, res, next) => {
	ITEM.create({
		itemname: req.body.itemname,
		itemprice: req.body.itemprice,
		itemingredient: req.body.itemingredient,
		itempicture: req.body.itempicture,
	})
		.then((itemA) => {
			res.json('Successfully registed => ' + itemA.itemname);
		})
		.catch(next);
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
	console.log('Item Updated');
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
