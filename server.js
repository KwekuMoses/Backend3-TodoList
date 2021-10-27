const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const listModel = require("./models/listmodel");
const taskModel = require("./models/taskmodel");
const userModel = require("./models/usermodel");
const moment = require("moment");
const app = express();
const bcrypt = require("bcrypt");
const { isDate } = require("moment");

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
app.post("/register", jsonParser, async (request, response) => {
  let email = request.body.email;
  let password = request.body.password;
  let hashedPassword = await bcrypt.hash(password, 10);

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
    //*Vi skapar en User med hjälp av vår model för users som ligger i models/users.js.
    const newUser = new userModel({
      email: email,
      password: hashedPassword,
    });

    newUser.save((error) => {
      if (error) {
        console.log(error);
      }
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
/*
app.get("/getTasks", (request, response) => {
  taskModel.find({}).then((tasksFound) => {
    if (!tasksFound) {
      return res.status(404).end();
    }
    return response.status(200).json(tasksFound);
  });
});
*/
app.get("/getTasks", (request, response) => {
  listModel.find({}).then((tasksFound) => {
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
/*Create a task*/
app.post("/test", jsonParser, async (request, response) => {
  let id = request.body.belongsTo_listId;
  let task = request.body.task;
  try {
    await listModel.findOneAndUpdate(
      {
        _id: id,
      },
      {
        date: moment().format("YYYY-MM-DD HH:mm"),
        $push: {
          tasks: {
            task: task,
          },
        },
      }
    );
  } catch {
    console.log("error");
  }

  response.end("task created");
});

/*Update a task*/
app.put("/updateTask", jsonParser, (req, res) => {
  let taskId = req.body.taskId;
  let listId = req.body.listId;
  let newTask = req.body.newTask;
  console.log(req.body);

  listModel
    .updateOne(
      { _id: listId, "tasks._id": taskId },
      { $set: { "tasks.$.task": newTask } }
    )
    .exec((error) => {
      if (error) {
        return handleError(error);
      }
    });
  res.end();
  // listModel
  //   .findByIdAndUpdate(
  //     listId,
  //     { $set: { tasks: { _id: taskId } } },
  //     {
  //       useFindAndModify: false,
  //     }
  //   )
  //   .exec((error) => {
  //     if (error) {
  //       return handleError(error);
  //     }
  //   });

  // listModel.findOneAndUpdate(
  //   { _id: listId, tasks: { $elemMatch: { _id: taskId } } },
  //   {
  //     $set: {
  //       "tasks.$.task": newTask,
  //     },
  //   }, // list fields you like to change
  //   { new: true, safe: true, upsert: true }
  // );

  // res.end("Customer was updated");
});

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

app.delete("/deleteTask", jsonParser, (req, res) => {
  let taskId = req.body.taskId;
  let listId = req.body.listId;
  console.log(req.body);
  listModel
    .findByIdAndUpdate(
      listId,
      { $pull: { tasks: { _id: taskId } } },
      {
        useFindAndModify: false,
      }
    )
    .exec((error) => {
      if (error) {
        return handleError(error);
      }
    });

  res.end("Customer was updated");
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
