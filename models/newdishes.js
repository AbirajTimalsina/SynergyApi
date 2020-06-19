const mongoose = require('mongoose');

const newdishesSchema = new mongoose.Schema(
	{
        newdishesname: {
			type: String,
		},
		newdishesprice: {
			type: String,
        },
		newdishespicture: {
			type: String,
		},
	},{ timestamps: true }
);

module.exports = mongoose.model('newdishes',newdishesSchema);