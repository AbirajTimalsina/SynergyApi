const mongoose = require('mongoose');


const ManagerSchema = new mongoose.Schema(
	{
        name: {
			type: String,
		},
	},{ timestamps: true }
);

module.exports = mongoose.model('Manager',ManagerSchema);