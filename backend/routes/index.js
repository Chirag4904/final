const express = require("express");
const router = express.Router();

// Controllers
const schemaController = require("../controller/schemas");
const faqController = require("../controller/faq-form");
const helpController = require("../controller/help-form");

router.get("/get-schemas", schemaController.getSchema);

router.post("/create-faq-form", faqController.createFaqForm);
router.delete("/delete-faq-form", faqController.deleteFaqForm);
router.put("/update-faq-form", faqController.updateFaqForm);
router.get("/get-faq-form", faqController.getFaqForm);

router.post("/create-help-form", helpController.createHelpForm);
router.delete("/delete-help-form", helpController.deleteHelpForm);
router.put("/update-help-form", helpController.updateHelpForm);
router.get("/get-help-form", helpController.getHelpForm);

module.exports = router;