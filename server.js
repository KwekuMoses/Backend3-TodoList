const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const listModel = require("./models/listmodel");
const taskModel = require("./models/taskmodel");
const moment = require("moment");
const app = express();

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoose.connect("mongodb://localhost:27017/todolist", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Connected to mongoDb");
});

/**
 * Get where greater than 3
 */

app.get("/getLists", (request, response) => {
  listModel.find().then((listsFound) => {
    if (!listsFound) {
      return res.status(404).end();
    }
    //console.log("listfound " + listsFound);
    return response.status(200).json(listsFound);
  });
});

/*Get tasks where belongsTo_listId = id */
app.get("/getTasks", (request, response) => {
  console.log(request.body);
  taskModel.find({}).then((tasksFound) => {
    if (!tasksFound) {
      return res.status(404).end();
    }
    console.log("listfound " + tasksFound);
    return response.status(200).json(tasksFound);
  });
});

/* Create a List */
app.post("/createList", jsonParser, (request, response) => {
  console.log(request.body);

  const listmodel = new listModel({
    header: request.body.header,
  });

  listmodel.save((error) => {
    if (error) {
      console.log(error);
    }
  });
  response.end("task created");
});

/*Create a task*/
app.post("/createTask", jsonParser, (request, response) => {
  console.log(request.body.task);

  const taskmodel = new taskModel({
    task: request.body.task,
    belongsTo_listId: request.body.belongsTo_listId,
  });

  taskmodel.save((error) => {
    if (error) {
      console.log(error);
    }
  });
  response.end("task created");
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
