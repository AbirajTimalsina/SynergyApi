const express = require('express');
const router = express.Router();
const fastfood = require('../models/fastfood');


router.post('/', (req, res, next) => {
	fastfood.create({
		fastfoodname: req.body.fastfoodname,
		fastfoodprice: req.body.fastfoodprice,
		fastfoodpicture: req.body.fastfoodpicture,
	})
		.then((fastfood) => {
			res.json('Successfully added detail of => ' + fastfood.fastfoodname);
		})
		.catch(next);
});


router.get('/all', (req, res, next) => {
	fastfood.find()
		.then((fastfood) => {
			res.json(fastfood);
		})
		.catch(next);
});

module.exports = router;