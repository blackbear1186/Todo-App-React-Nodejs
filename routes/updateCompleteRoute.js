const express = require('express')
const router = express.Router()
const TodoModel = require("../models/todo");

router.put('/update-complete/:id', async (req,res,next) => {
    try {
        const {id} = req.params
        const completed = req.body.complete
        const update = await TodoModel.findByIdAndUpdate({_id: id}, {complete: completed})
        res.json(update)
    } catch (error) {
        next(error)
    }
  })

  module.exports = router
  