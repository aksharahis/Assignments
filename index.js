const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const Task = require('./models/Task');

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/todo-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Create Task
app.post('/tasks', async (req, res) => {
    const task = new Task(req.body);
    await task.save();
    res.send(task);
});

// Get All Tasks
app.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});

// Update Task
app.put('/tasks/:id', async (req, res) => {
    const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(task);
});

// Delete Task
app.delete('/tasks/:id', async (req, res) => {
    await Task.findByIdAndDelete(req.params.id);
    res.send({ success: true });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});