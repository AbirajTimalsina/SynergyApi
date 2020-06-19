const mongoose = require('mongoose');

const regularfoodSchema = new mongoose.Schema(
	{
        regularfoodname: {
			type: String,
		},
		regularfoodprice: {
			type: String,
        },
        regularfoodpicture: {
			type: String,
		},
	},{ timestamps: true }
);

module.exports = mongoose.model('regularfood',regularfoodSchema);