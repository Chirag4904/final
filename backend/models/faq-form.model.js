const mongoose = require('mongoose');

const faq = {
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true
    }
};

const faqSchema = new mongoose.Schema(faq);
const FaqModel = mongoose.model("faq-form", faqSchema);

module.exports = { FaqModel, faq };