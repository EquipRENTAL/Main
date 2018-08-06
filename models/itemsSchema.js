const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  user: { type: String, required: true },
  category: {type: String, required: true },
  title: {type: String, required: true},
  description: String,
  image: { type: String, required: true},
  date: { type: Date, default: Date.now }
});

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;


