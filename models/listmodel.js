const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const SessionSchema = new Schema({
  header: {
    type: String,
    default: "kweku",
    required: true,
  },
  task: {
    type: String,
    default: "kweku",
    required: true,
  },

  date: {
    type: String,
    default: () => moment().format("YYYY-MM-DD"),
    required: true,
  },
});

module.exports = mongoose.model("Session", SessionSchema);
