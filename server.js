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
app.get("/getListsToday", (request, response) => {
  let dateToday = moment().format("YYYY-MM-DD");

  get_lists.find({ date: dateToday }).then((listFound) => {
    if (!listFound) {
      return res.status(404).end();
    }
    console.log("listfound " + listFound);
    return response.status(200).json(listFound);
  });
});

//* Create a List
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
//* Save a task
app.post("/saveTask", jsonParser, (request, response) => {
  console.log(request.body);

  const taskmodel = new taskModel({
    task: request.body.task,
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
