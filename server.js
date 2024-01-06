const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const TodoModel = require('./models/todo')

app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

mongoose.connect('mongodb://localhost/todo-app')
    .then(() => console.log('MongoDb connected'))
    .catch(err => console.log(err))

mongoose.set('debug', true)

app.post("/add", (req, res) => {
  const task = req.body.task;
  TodoModel.create({
    task: task
  }).then((result) => res.json(result))
    .catch(err => res.json(err))
});

app.listen(port, () => console.log(`Listening on port ${port}`));
