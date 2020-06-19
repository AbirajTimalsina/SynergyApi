const express = require('express');
const router = express.Router();
const popularfood = require('../models/popularfood');


router.post('/', (req, res, next) => {
	popularfood.create({
		popularfoodname: req.body.popularfoodname,
		popularfoodprice: req.body.popularfoodprice,
		popularfoodpicture: req.body.popularfoodpicture,
	})
		.then((popularfood) => {
			res.json('Successfully added detail of => ' + popularfood.popularfoodname);
		})
		.catch(next);
});


router.get('/all', (req, res, next) => {
	popularfood.find()
		.then((popularfood) => {
			res.json(popularfood);
		})
		.catch(next);
});

module.exports = router;