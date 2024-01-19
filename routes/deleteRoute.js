const express = require("express");
const router = express.Router();
const TodoModel = require("../models/todo");
const logError = require("../error");

const deleteTask = async (clientSideId, res) => {
  const { id } = clientSideId;
  const del = await TodoModel.findByIdAndDelete({ _id: id });
  res.json(del);
};

router.delete("/delete/:id", async (req, res, next) => {
  try {
    deleteTask(req.params, res);
  } catch (error) {
    logError(error, next);
  }
});

module.exports = router;
