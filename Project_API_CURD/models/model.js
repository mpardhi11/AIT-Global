const mongoose = require("mongoose");

// product add update delete
//defining schema
const productSchema = mongoose.Schema(
  {
    title: {
      type: String,
    },
    price: {
      type: Number,
    },
    desc: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

//exporting the schema model
module.exports = mongoose.model("MyProducts", productSchema);
