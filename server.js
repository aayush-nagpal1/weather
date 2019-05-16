const express = require("express");
const logger = require("morgan");
const ejs = require("ejs");
const path = require("path");
const cors = require("cors")
const index_router = require("./server/index.route");
const {port} = require("./config");

let app = express();
app.engine("html", ejs.renderFile);
app.use(logger("dev"));
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', ['*']);
    res.append('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.append('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
app.use(cors())
app.use(express.static(path.join(__dirname, "/public")));
app.use("/", index_router);
  

app.listen(port, () => {
    console.log(`Server Started on : ${port}`)
})