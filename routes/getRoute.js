const express = require("express");
const router = express.Router();
const TodoModel = require("../models/todo");

router.get('/get', async (req,res, next) => {
    try {
        const result = await TodoModel.find()
        res.json(result)
    }
    catch(error) {
        return next(error)
    }
  })

module.exports = router;
