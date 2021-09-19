const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, required: true },
  email: {
    type: String, required: true, unique: true, index: true, dropDups: true,
  },
  password: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  mobile: { type: String, required: true },
});

module.exports = mongoose.model("User", userSchema);