const mongoose = require('mongoose');

(async () => {
    try {
        await mongoose.connect('mongodb+srv://cms:rj123456@cluster0.uvuct.mongodb.net/cms?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch(err) {
        console.log("Error connecting to MongoDB");
    }

})();

require("../models/faq-form.model");
require("../models/help-form.model");