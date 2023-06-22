var express = require('express');
var router = express.Router();

const tasks = [
  { id: 1, name: 'Task 1' },
  { id: 2, name: 'Task 2' },
  { id: 3, name: 'Task 3' }
];

/* GET home page. */
router.get('/tasks', function(req, res, next) {
  res.json(tasks);
});

router.get('/tasks/:id', function(req, res, next) {
  const id = req.params.id;
  const task = tasks.find(task => task.id === parseInt(id));

  if (!task) {
    return res.status(404).json({ error: 'Task not found' });
  }

  res.json(task);
});

router.post('/tasks', function(req, res) {

  const { name, description } = req.body;

  const newTask = {
    id: tasks.length + 1, 
    name,
    description
  };

  tasks.push(newTask);

  res.status(201).json(newTask);
});

router.put('/tasks/:id', function(req, res) {
  const id = req.params.id;
  const { name, description } = req.body;

  const taskIndex = tasks.findIndex(task => task.id === parseInt(id));

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  tasks[taskIndex].name = name;
  tasks[taskIndex].description = description;

  res.json(tasks[taskIndex]);
});

router.delete('/tasks/:id', function(req, res) {
  const id = req.params.id;

  const taskIndex = tasks.findIndex(task => task.id === parseInt(id));

  if (taskIndex === -1) {
    return res.status(404).json({ error: 'Task not found' });
  }

  const deletedTask = tasks.splice(taskIndex, 1)[0];

  res.json(deletedTask);
});

module.exports = router;
