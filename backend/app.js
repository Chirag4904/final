require("./config/database-connection");
const express = require("express");
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors({origin: "*"}));

app.use("/api", require("./routes/index.js"));

app.listen(5000, () => {
    console.log("Server started on port 5000");
});