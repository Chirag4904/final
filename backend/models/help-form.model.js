const mongoose = require('mongoose');

const help = {
	title: {
		type: String,
		required: true,
	},
	subtitle: {
		type: String,
		required: true,
	},
	paragraph: {
		type: String,
		required: false,
	},
	image: {
		imageURL: {
			type: String,
			required: true,
		},
		imageAlt: {
			type: String,
			required: true,
		}
	}
};

const helpSchema = new mongoose.Schema(help);
const HelpModel = mongoose.model("help-form", helpSchema);

module.exports = { HelpModel, help };