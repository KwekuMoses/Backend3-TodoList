const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const list = require("./models/listmodel");

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

app.post("/saveTask", jsonParser, (request, response) => {
  console.log(request.body);

  const newList = new list({
    header: request.body.header,
    task: request.body.task,
  });
  //console.log(request.body.name)
  newList.save((error) => {
    if (error) {
      console.log(error);
    }
  });
  response.end("list created");
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
