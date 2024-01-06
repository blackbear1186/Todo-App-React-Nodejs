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

app.get('/get', async (req,res) => {
  await TodoModel.find()
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.post("/add", async (req, res) => {
  const task = req.body.task;
  // res.send('Got it')
  await TodoModel.create({
    task: task
  }).then((result) => res.json(result))
    .catch(err => res.json(err))
});

app.put('/update/:id', async (req,res) => {
  const {id} = req.params
  // console.log(id)
  TodoModel.findByIdAndUpdate({_id: id}, {complete: true})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.delete('/delete/:id', async (req,res) => {
  const {id} = req.params
  TodoModel.findByIdAndDelete({_id: id})
  .then(result => res.json(result))
  .catch(err => res.json(err))
})

app.listen(port, () => console.log(`Listening on port ${port}`));
