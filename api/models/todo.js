const mongoose = require('mongoose');
const Schema = mongoose.Schema

const ToDoSchema = new Schema({
    text:{
        type: String,
        required: true
    },
    complete: {
        type:Boolean,
        defualt: false
    },
    timestamp: {
        type: Date,
        default: Date.now()
    }
})

const Todo = mongoose.model("Todo", ToDoSchema);
module.exports = Todo