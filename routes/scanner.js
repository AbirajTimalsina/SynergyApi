const express = require('express');
const router = express.Router();
const QRcode = require('../models/scanner');

router.route('/')
	.get((req, res, next) => {
		QRcode.find()
			.then((newdishes) => {
				res.json(newdishes);
			})
			.catch((err) => {
				console.log(err);
			});
	})

	.post((req, res, next) => {
		QRcode.create(req.body)
			.then((newdishes) => {
				res.json(newdishes);
			})
			.catch(next);
	})
	.put((req, res) => {
		res.send('Not Supported');
	})

	.delete((req, res, next) => {
		QRcode.deleteMany({})
			.then((status) => {
				res.json(status);
			})
			.catch(next);
	});
	
    
    module.exports = router;
