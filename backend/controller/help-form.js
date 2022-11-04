const { HelpModel } = require("../models/help-form.model");

module.exports.createHelpForm = async (req, res) => {
	console.log(req.body);
	try {
		let helpModel = new HelpModel();
		helpModel.title = req.body.title;
		helpModel.subtitle = req.body.subtitle;
		helpModel.paragraph = req.body.paragraph;
		helpModel.image = {};
		helpModel.image.imageURL = req.body.image.imageURL;
		helpModel.image.imageAlt = req.body.image.imageAlt;
		let response = await helpModel.save();

		res.status(200).json({
			success: true,
			message: "Help Form form created successfully",
			data: response,
		});
	} catch (err) {
		res.status(500).json({
			message: "Error creating Help form",
			error: err,
		});
	}
};

module.exports.deleteHelpForm = async (req, res) => {
	try {
		let helpFormId = req.body.helpFormId;
		let helpForm = await HelpModel.findByIdAndDelete(helpFormId);

		if (helpForm) {
			res.status(200).json({
				success: true,
				message: "Help form deleted successfully",
				data: helpForm,
			});
		} else {
			res.status(404).json({
				success: false,
				message: "Help form not found",
				data: {},
			});
		}
	} catch (err) {
		res.status(500).json({
			message: "Error deleting the FAQ form",
			error: err,
		});
	}
};

module.exports.updateHelpForm = async (req, res) => {
	try {
		let helpFormId = req.body.helpFormId;
		let helpForm = await HelpModel.findById(helpFormId);

		if (helpForm) {
			helpForm.title = req.body.title;
			helpForm.subtitle = req.body.subtitle;
			helpForm.paragraph = req.body.paragraph;
			helpForm.image = {};
			helpForm.image.imageURL = req.body.imageURL;
			helpForm.image.imageAlt = req.body.imageAlt;
			let response = await helpForm.save();

			res.status(200).json({
				success: true,
				message: "Help form updated successfully",
				data: response,
			});
		} else {
			res.status(404).json({
				success: false,
				message: "Help form not found",
				data: {},
			});
		}
	} catch (err) {
		res.status(500).json({
			message: "Error updating the FAQ form",
			error: err,
		});
	}
};

module.exports.getHelpForm = async (req, res) => {
	try {
		HelpModel.find({}, (err, helpForms) => {
			if (err) {
				res.status(500).json({
					message: "Error getting the help forms",
					error: err,
				});
			} else {
				res.status(200).json({
					success: true,
					message: "Help forms retrieved successfully",
					data: helpForms,
				});
			}
		});
	} catch (err) {
		res.status(500).json({
			message: "Error getting the FAQ form",
			error: err,
		});
	}
};
