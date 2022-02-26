const mongoose = require("mongoose");

const schema = mongoose.Schema;

let empSchema = new schema({
  name: { type: String },
  Age: { type: Number },
  Address: { type: String },
});

// module.exports = mongoose.model("newEmp", empSchema);
module.exports = mongoose.model("newEmp2", empSchema);
