const express = require("express");
const logger = require("morgan");
const ejs = require("ejs");
const path = require("path");

const index_router = require("./routes/index.route");

const {
    port
} = require("./config");

let app = express();
app.engine("html", ejs.renderFile);
app.use(logger("dev"));
app.use(express.static(path.join(__dirname, "/public")));
app.use("/", index_router);

app.listen(port, () => {
    console.log(`Server Started on : ${port}`)
})