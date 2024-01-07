const express = require('express')
const router = express.Router()
const TodoModel = require("../models/todo");

router.delete('/delete/:id', async (req,res,next) => {

    try {
        const {id} = req.params
        const del = await TodoModel.findByIdAndDelete({_id: id})
        res.json(del)
    } catch (error) {
        next(error)
    }
  })

  module.exports = router