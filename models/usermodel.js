const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const UserSchema = new Schema({
  email: {
    type: String,
    default: "no user",
    required: true,
  },
  password: {
    type: String,
    default: "ID HERE",
    required: true,
  },
  date: {
    type: String,
    default: () => moment().format("YYYY-MM-DD"),
    required: true,
  },
});

module.exports = mongoose.model("user", UserSchema);
