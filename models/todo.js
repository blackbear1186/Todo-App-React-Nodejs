const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TodoSchema = new Schema({
    task: {
        type: String,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    }
})

const TodoModel = mongoose.model('todo', TodoSchema)

module.exports = TodoModel