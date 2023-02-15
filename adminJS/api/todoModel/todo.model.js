const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    text: { type: String },
    timestamp: { type: Date },
    complete: { type: Boolean },
});
const todo = mongoose.model('todo', todoSchema);

module.exports = {
    todoSchema,
    todo
}