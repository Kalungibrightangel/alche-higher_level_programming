#!/usr/bin/node

const request = require('request');

request.get(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const todos = JSON.parse(body);
  const completedTasks = {};

  todos.forEach((task) => {
    if (task.completed) {
      if (!completedTasks[task.userId]) {
        completedTasks[task.userId] = 0;
      }

      completedTasks[task.userId] += 1;
    }
  });

  Object.keys(completedTasks).forEach((userId) => {
    console.log(`${userId}: ${completedTasks[userId]}`);
  });
});
