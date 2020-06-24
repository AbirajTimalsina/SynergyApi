const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const USER = require('../models/users');
const AUTH = require('./Auth');

router.post('/signup', (req, res, next) => {
	USER.findOne({ email: req.body.email })
		.then((usersA) => {
			if (usersA != null) {
				let err = new Error(
					'This email has been already used for Registration.'
				);
				err.status = 401;
				return next(err);
			} else {
				bcrypt.hash(req.body.password, 10, function (err, hash) {
					if (err) {
						throw new Error('Could not encrypt Password!');
					}
					let USERA = new USER(req.body);
					USERA.password = hash;
					USERA.save().then((usersB) => {
						let token = jwt.sign({ userID: usersB._id }, process.env.SECRET);
						res.json({ status: 'Signup Success!', token: token });
					});
				});
			}
		})
		.catch(next);
	console.log('Signup Post');
});

router.post('/login', (req, res, next) => {
	USER.findOne({ phonenumber: req.body.phonenumber })
		.then((usersA) => {
			if (usersA === null) {
				let err = new Error('Phone Number not found!');
				err.status = 401;
				return next(err);
			}
			bcrypt.compare(req.body.password, usersA.password, function (
				err,
				status
			) {
				if (!status) {
					let err = new Error('Password does not match!');
					err.status = 401;
					return next(err);
				}
				console.log('Login post');
				let token = jwt.sign({ userID: usersA._id }, process.env.SECRET);
				res.json({ status: 'Successfully logged in', token: token });
			});
		})
		.catch(next);
});

router.post('/userforgotpassword', (req, res, next) => {
	USER.findOne({ email: req.body.email })
		.then((usersA) => {
			res.json(usersA);
		})
		.catch(next);
	console.log('I was here');
});

router.put('/userforgotpassword', (req, res, next) => {
	bcrypt.hash(req.body.password, 10, function (err, hash) {
		if (err) {
			throw new Error('Could not encrypt Password!');
		}
		USER.findOneAndUpdate(
			{ email: req.body.email },
			{ $set: { password: hash } },
			{ new: true }
		)
			.then((UserB) => {
				res.json({
					UserB,
				});
			})
			.catch(next);
		console.log('Profile Put');
	});
});


router.get('/me', AUTH.verifyUser, (req, res, next)=>{
	res.json({ fullname: req.user.fullname, phonenumber: req.user.phonenumber,email: req.user.email, qa: req.user.qa })
	});

module.exports = router;
