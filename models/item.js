const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
	{
		itemname: {
			type: String,
		},
		itemprice: {
			tpye: String,
		},
		itemingredient: {
			type: String,
		},
		itempicture: {
			type: String,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);