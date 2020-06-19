const mongoose = require('mongoose');

const userScheme = new mongoose.Schema({
	fullname: {
		type: String,
		required: false,
		minlength: 1,
		maxlength: 50,
	},
	phonenumber: {
		type: String,
		required: false,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		minlength: 4,
		maxlength: 40,
	},
	password: {
		type: String,
		required: true,
		minlength: 4,
	},
	profile_image: {
		type: String,
	},
	question: {
		type: String,
		minlength: 3,
	},
});

module.exports = mongoose.model('User', userScheme);
