const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
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
		required: false,
		unique: true,
		minlength: 7,
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
	qa: {
		question: {
			type: String,
		},
		answer: {
			type: String,
			minlength: 2,
		},
	},
});

module.exports = mongoose.model('User', userSchema);
