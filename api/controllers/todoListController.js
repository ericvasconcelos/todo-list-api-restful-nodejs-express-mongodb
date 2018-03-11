'use strict';

var mongoose = require('mongoose'),
  Task = mongoose.model('Tasks');

exports.listTasks = function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.createTask = function(req, res) {
  var newTask = new Task(req.body);
  newTask.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.listTask = function(req, res) {
  Task.findById(req.params.taskId, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.editTask = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.taskId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.deleteTask = function(req, res) {
  Task.remove({_id: req.params.taskId}, function(err, task) {
    if (err)
      res.send(err);
    res.json({message: 'Task successfully deleted'});
  });
};
