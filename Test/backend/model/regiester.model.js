const mongoose = require("mongoose");

const schema = mongoose.Schema;

let registerSchema = new schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

module.exports = mongoose.model("register", registerSchema);
