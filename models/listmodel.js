const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const ListSchema = new Schema({
  header: {
    type: String,
    default: "kweku",
    required: true,
  },
  tasks: {
    type: Array,
    required: false,
  },
  date: {
    type: String,
    default: () => moment().format("YYYY-MM-DD HH:mm"),
    required: true,
  },
});

module.exports = mongoose.model("list", ListSchema);
