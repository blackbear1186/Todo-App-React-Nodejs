const express = require("express");

const router = express.Router();

const TodoModel = require("../models/todo");

const logError = require('../error')

const addTask = async (response, task) => {
  const post = await TodoModel.create({
    task:task
  })
  response.json(post)
}


router.post("/add", async (req, res, next) => {
  try {
    
    addTask(res, req.body.task)
  } catch (error) {

    logError(error,next)
  }
});

module.exports = router;
