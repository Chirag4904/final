const cloneDeep = require('lodash.clonedeep');

const { help } = require("../models/help-form.model");
const { faq } = require("../models/faq-form.model");

module.exports.getSchema = (req, res) => {

    const helpSchema = cloneDeep(help);
    const faqSchema = cloneDeep(faq);

    for (const property in helpSchema) {
        let containsField = Object.keys(helpSchema[property])[0] == "type";
        if(containsField) {
            helpSchema[property].type = helpSchema[property].type.name
        } else {
            for (const subProperty in helpSchema[property]) {
                helpSchema[property][subProperty].type = helpSchema[property][subProperty].type.name
            }
        }
      }

      for (const property in faqSchema) {
        let containsField = Object.keys(faqSchema[property])[0] == "type";
        if(containsField) {
            faqSchema[property].type = faqSchema[property].type.name
        } else {
            for (const subProperty in help[property]) {
                faqSchema[property][subProperty].type = faqSchema[property][subProperty].type.name
            }
        }
      }
    res.json({
        helpSchema,
        faqSchema
    });
};






