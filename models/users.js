const mongoose = require('mongoose');
const purchaseSchema = new mongoose.Schema({
	itemname: { type: String },
	itemprice: { type: String },
});
const feedbackSchema = new mongoose.Schema({
	itemname: { type: String },
	favorite: { type: String },
	rating: { type: String },
});

const userSchema = new mongoose.Schema({
	fullname: {
		type: String,
		required: false,
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
		required: false,
		minlength: 1,
	},
	profile_image: {
		type: String,
	},
	address:{
        type: String,
        required: false,
    },
    gender:{
        type: String,
        required: false,
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
	purchase: [purchaseSchema],
	feedback: [feedbackSchema],
});

module.exports = mongoose.model('User', userSchema);
