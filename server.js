const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("./models/listmodel");
const app = express();

mongoose.connect("mongodb://localhost:27017/todolist", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Connected to mongoDb");
});

app.post("/customers", (request, response) => {
  console.log(request.body);

  const newSession = new session({
    name: request.body.name,
    rating: request.body.rating,
    duration: request.body.duration,
    tasks: request.body.tasks,
    mood: request.body.mood,
    comment: request.body.comment,
  });
  //console.log(request.body.name)
  newSession.save((error) => {
    if (error) {
      console.log(error);
    }
  });
  response.end("session created");
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
