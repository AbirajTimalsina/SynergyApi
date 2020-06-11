const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
	fullname: {
		type: String,
		required: false,
		minlength: 7,
		maxlength: 50,
	},
	phonenumber: {
		type: String,
		required: false,
		unique: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		minlength: 7,
		maxlength: 40,
	},
	password: {
		type: String,
		required: true,
		minlength: 8,
	},
	profile_image: {
		type: String,
	},
	question: {
		type: String,
		minlength: 5,
	},
});

module.exports = mongoose.model('User', userScheme);
