const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const listModel = require("./models/listmodel");
const taskModel = require("./models/taskmodel");
const userModel = require("./models/usermodel");
const moment = require("moment");
const app = express();
const bcrypt = require("bcrypt");

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

/*Makes it possible to access form data in URL */
/* Keeping this because it will make it easier to access the form-data */
app.use(express.urlencoded({ extended: false }));

/*Register a user*/
/*Second Parameter in bcrypt.hash is salt rounds, e.g. how many times to hash the password*/
app.post("/register", jsonParser, (request, response) => {
  let errors = [];
  console.log(
    `routes/users.js -> Email: ${request.body.email}, Password: ${request.body.password}`
  );

  if (!email || !password) {
    errors.push({ msg: "Please fill out all fields" });
  }

  if (password.length < 6) {
    errors.push({ msg: "Use at least 6 characters for your password" });
  }

  if (errors.length > 0) {
    console.log("No Errors");
  } else {
    //*Vi skapar en User med hjälp av vår model för users som ligger i models/users.js.
    const newUser = new userModel({
      email: email,
      password: password,
    });

    newUser.save((error) => {
      if (error) {
        console.log(error);
      }
    });

    bcrypt.hash(password, 10, function (error, hash) {
      // Store hash in your password DB.
      newUser.password = hash;

      newUser
        .save()
        .then((value) => {
          request.flash("success_msg", "You have been registered!");
          response.redirect("/users/login");
        })
        .catch((error) => console.log(error));
    });
  }
});

/*Login a user*/
app.post("/login", (request, response) => {
  console.log("route working");
});

/*Get All Lists */
app.get("/getLists", (request, response) => {
  listModel.find().then((listsFound) => {
    if (!listsFound) {
      return res.status(404).end();
    }
    return response.status(200).json(listsFound);
  });
});

/*Get tasks where belongsTo_listId = id */
app.get("/getTasks", (request, response) => {
  taskModel.find({}).then((tasksFound) => {
    if (!tasksFound) {
      return res.status(404).end();
    }
    return response.status(200).json(tasksFound);
  });
});

/* Create a List */
app.post("/createList", jsonParser, (request, response) => {
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

/*Update a task*/
app.put("/updateTask", jsonParser, (request, response) => {
  let id = request.body.id;
  let task = request.body.task;
  taskModel.findByIdAndUpdate(id, { task: task }).exec((error) => {
    if (error) {
      return handleError(error);
    }
  });
  response.end("Task Updated");
});
/*Delete a task*/

/*Update a list*/
app.put("/updateList", jsonParser, (request, response) => {
  let id = request.body.id;
  let header = request.body.header;
  listModel.findByIdAndUpdate(id, { header: header }).exec((error) => {
    if (error) {
      return handleError(error);
    }
  });
  response.end("Task Updated");
});
/*Delete a task*/
app.delete("/deleteTask", jsonParser, (request, response) => {
  let id = request.body.id;
  taskModel.findByIdAndDelete(id).exec((error) => {
    if (error) {
      return handleError(error);
    }
  });
  response.end("Task Deleted!");
});
/*Delete a list*/
app.delete("/deleteList", jsonParser, (request, response) => {
  let id = request.body.id;
  listModel.findByIdAndDelete(id).exec((error) => {
    if (error) {
      return handleError(error);
    }
  });
  response.end("Task Deleted!");
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
