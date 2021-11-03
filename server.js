const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const listModel = require("./models/listmodel");
const userModel = require("./models/usermodel");
const moment = require("moment");
const app = express();
const bcrypt = require("bcrypt");
const cors = require("cors");

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://kweku:mongodb@cluster.8uxr5.mongodb.net/todo-app-kweku-moses",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", () => {
  console.log("Connected to mongoDb");
});

app.use(cors());

app.use(express.urlencoded({ extended: false }));

app.get("/lists", (request, response) => {
  listModel.find().then((listsFound) => {
    if (!listsFound) {
      return res.status(404).end();
    }
    return response.status(200).json(listsFound);
  });
});

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
app.post("/createTask", jsonParser, async (request, response) => {
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
      {
        date: moment().format("YYYY-MM-DD HH:mm"),

        $set: { "tasks.$.task": newTask },
      }
    )
    .exec((error) => {
      if (error) {
        return handleError(error);
      }
    });
  res.end();
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
      {
        date: moment().format("YYYY-MM-DD HH:mm"),
        $pull: { tasks: { _id: taskId } },
      },
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => `Server running on port ${PORT}`);
