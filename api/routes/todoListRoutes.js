'use strict';

module.exports = function(app) {
  var todoList = require('../controllers/todoListController');

  app.route('/tasks')
    .get(todoList.listTasks)
    .post(todoList.createTask);

  app.route('/tasks/:taskId')
    .get(todoList.listTask)
    .put(todoList.editTask)
    .delete(todoList.deleteTask);
};