const express = require('express');
const router = express.Router();
const fastfood = require('../models/fastfood');


router.route('/')
	.get((req, res, next) => {
		fastfood.find()
			.then((FastFood) => {
				res.json(FastFood);
			})
			.catch((err) => {
				console.log(err);
			});
	})

	.post((req, res, next) => {
		fastfood.create(req.body)
			.then((FastFood) => {
				res.json(FastFood);
			})
			.catch(next);
	})
	.put((req, res) => {
		res.send('Not Supported');
	})

	.delete((req, res, next) => {
		fastfood.deleteMany({})
			.then((status) => {
				res.json(status);
			})
			.catch(next);
	});

router
	.route('/:id')
	.get((req, res, next) => {
		fastfood.findById(req.params.id)
			.then((FastFood) => {
				res.json(FastFood);
			})
			.catch(next);
	})

	.post((req, res) => {
		res.send('Not Supported');
	})

	.put((req, res, next) => {
		fastfood.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		)
			.then((FastFood) => {
				res.json(FastFood);
			})
			.catch(next);
	})

	.delete((req, res, next) => {
		fastfood.findByIdAndDelete(req.params.id)
			.then((FastFood) => {
				res.json(FastFood);
			})
			.catch(next);
	});

module.exports = router;