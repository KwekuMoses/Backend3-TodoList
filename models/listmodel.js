const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const TaskSchema = new Schema({
  task: {
    type: String,
    required: false,
  },
});

const ListSchema = new Schema({
  header: {
    type: String,
    default: "kweku",
    required: true,
  },

  tasks: [TaskSchema],

  date: {
    type: String,
    default: () => moment().format("YYYY-MM-DD HH:mm"),
    required: true,
  },
});

module.exports = mongoose.model("list", ListSchema);
