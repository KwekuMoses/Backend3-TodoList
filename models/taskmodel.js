const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const moment = require("moment");

const TaskSchema = new Schema({
  task: {
    type: String,
    default: "no task",
    required: true,
  },
  belongsTo_listId: {
    type: String,
    default: "ID HERE",
    required: true,
  },
});

module.exports = mongoose.model("task", TaskSchema);
