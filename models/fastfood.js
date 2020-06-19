const mongoose = require('mongoose');

const fastfoodSchema = new mongoose.Schema(
	{
        fastfoodname: {
			type: String,
		},
		fastfoodprice: {
			type: String,
        },
		fastfoodpicture: {
			type: String,
		},
	},{ timestamps: true }
);

module.exports = mongoose.model('fastfood',fastfoodSchema);