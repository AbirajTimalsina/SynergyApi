const mongoose = require('mongoose');

const imagesliderSchema = new mongoose.Schema(
	{
		imageslider: {
			type: String,
		},
	},{ timestamps: true }
);

module.exports = mongoose.model('imageslider',imagesliderSchema);