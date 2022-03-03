const config = require("./config");
const express = require("express");
const cors = require("cors");

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const allRegister = require("./routes/register.route");
// const allRegister = require("./routes/register.route");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use("/Register", allRegister);
// app.use("/Register", allRegister);
mongoose
  .connect(config.mongoURL)
  .then(console.log("DB connected"))
  .catch((err) => console.log(err));

mongoose.Promise = global.Promise;

let db = mongoose.connection;
db.on("error", console.error.bind(console, "Connection error in mongo"));

app.listen(config.serverPort, function () {
  console.log("Server is running");
});
