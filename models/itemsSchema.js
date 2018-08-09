const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  // user is supposed to be an object id
  user: { 
      type: Schema.Types.ObjectId,
      ref: "User"
  },
  category: {type: String, required: true, unique: false },
  title: {type: String, required: true, unique: false},
  description: { type: String, unique:false },
  image: { type: String, required: true, unique:false},
});

const Items = mongoose.model("Items", itemSchema);

module.exports = Items;


