const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const TaskSchema = new Schema({
  tasks: {
    type: Array,
    default: "no task",
    required: true,
  },

  date: {
    type: String,
    default: () => moment().format("YYYY-MM-DD"),
    required: true,
  },
});

module.exports = mongoose.model("task", TaskSchema);
