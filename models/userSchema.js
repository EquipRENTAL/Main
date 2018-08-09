const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// item is an array that contains any and all items that a user has posted.
const userSchema = new Schema({
  local: {
    email: String,
    password: String,
  },
  google: {
    id: String,
    token: String,
    email: String,
    name: String
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: Number,
    unique: true
  },
  zip: {
    type: Number,
    required: true
  },
  date: {
    type: Date, 
    default: Date.now
  },
  // push item objects to user data, if they have any.
  items: [
    {
      type: Schema.Types.ObjectId,
      ref: "Item"
    }
  ]
});

// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};


const User = mongoose.model("User", userSchema);

module.exports = User;