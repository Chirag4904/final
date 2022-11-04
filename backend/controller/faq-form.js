const { FaqModel } = require("../models/faq-form.model");

module.exports.createFaqForm = async (req, res) => {
    try {
        let faqModel = new FaqModel();
        faqModel.title = req.body.title;
        faqModel.description = req.body.description;
        faqModel.name = req.body.name;
        let response = await faqModel.save();

        res.status(200).json({
            success: true,
            message: "FAQ form created successfully",
            data: response
        });

    } catch(err) {
        res.status(500).json({
            message: "Error creating FAQ form",
            error: err
        });
    }
}

module.exports.deleteFaqForm = async (req, res) => {
    try {
        let faqFormId = req.body.faqFormId;
        let faqForm = await FaqModel.findByIdAndDelete(faqFormId);

        if(faqForm) {
            res.status(200).json({
                success: true,
                message: "FAQ form deleted successfully",
                data: faqForm
            });
        } else {
            res.status(404).json({
                success: false,
                message: "FAQ form not found",
                data: {}
            });
        }

    } catch(err) {
        res.status(500).json({
            message: "Error deleting the FAQ form",
            error: err
        });
    }
}

module.exports.updateFaqForm = async (req, res) => {
    try {
        let faqFormId = req.body.faqFormId;
        let faqForm = await FaqModel.findById(faqFormId);

        if(faqForm) {
            faqForm.title = req.body.title;
            faqForm.description = req.body.description;
            let response = await faqForm.save();

            res.status(200).json({
                success: true,
                message: "FAQ form updated successfully",
                data: response
            });
        } else {
            res.status(404).json({
                success: false,
                message: "FAQ form not found",
                data: {}
            });
        }
        
    }
    catch(err) {
        res.status(500).json({
            message: "Error updating the FAQ form",
            error: err
        });
    }
}

module.exports.getFaqForm = async (req, res) => {
    try {
        let faqForms = await FaqModel.find({});

        if(faqForms) {
            res.status(200).json({
                success: true,
                message: "FAQ form found",
                data: faqForms
            });
        } else {
            res.status(404).json({
                success: false,
                message: "FAQ form not found",
                data: {}
            });
        }


    } catch(err) {
        res.status(500).json({
            message: "Error getting the FAQ form",
            error: err
        });
    }
}