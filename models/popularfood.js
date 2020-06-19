const mongoose = require('mongoose');

const popularfoodSchema = new mongoose.Schema(
	{
        popularfoodname: {
			type: String,
		},
		popularfoodprice: {
			type: String,
        },
		popularfoodpicture: {
			type: String,
		},
	},{ timestamps: true }
);

module.exports = mongoose.model('popularfood',popularfoodSchema);