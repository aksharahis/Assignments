const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    priority: String,
    category: String,
    dueDate: String,
    completed: Boolean
});

module.exports = mongoose.model('Task', TaskSchema);