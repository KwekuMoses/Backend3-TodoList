const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const TaskSchema = new Schema({
  task: {
    type: String,
    default: "no task",
    required: true,
  },
});

module.exports = mongoose.model("task", TaskSchema);
