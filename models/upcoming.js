const mongoose = require('mongoose');

const upcomingfoodSchema = new mongoose.Schema(
	{
        upcomingfoodname: {
			type: String,
		},
		upcomingfoodprice: {
			type: String,
        },
		upcomingfoodpicture: {
			type: String,
		},
	},{ timestamps: true }
);

module.exports = mongoose.model('upcomingfood',upcomingfoodSchema);