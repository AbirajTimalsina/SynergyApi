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

module.exports = router;
