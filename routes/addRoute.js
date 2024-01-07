const express = require("express");

const router = express.Router();

const TodoModel = require("../models/todo");

router.post("/add", async (req, res, next) => {
  try {
    const task = req.body.task
    const post = await TodoModel.create({
      task:task
    })
    res.json(post)
  } catch (err) {
    next(err);
  }
});

module.exports = router;
