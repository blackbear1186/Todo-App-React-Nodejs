const express = require('express')
const router = express.Router()
const TodoModel = require("../models/todo");

router.put('/update/:id', async (req,res,next) => {
    try {
        const {id} = req.params
        const task = req.body.task
        const update = await TodoModel.findByIdAndUpdate({_id: id}, {task:task})
        res.json(update)
    } catch (error) {
        next(error)
    }
  })

  module.exports = router
  