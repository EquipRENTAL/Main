const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

// change userschema to include:
// phone, username, zipcode

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
  }

});

// generating a hash
userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password);
};


const Users = mongoose.model("Users", userSchema);

module.exports = Users;