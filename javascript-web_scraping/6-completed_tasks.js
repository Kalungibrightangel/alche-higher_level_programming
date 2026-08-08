#!/usr/bin/node

const request = require('request');

request.get(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const todos = JSON.parse(body);
  const users = {};

  todos.forEach((task) => {
    if (task.completed) {
      if (!users[task.userId]) {
        users[task.userId] = 0;
      }

      users[task.userId] += 1;
    }
  });

  console.log(users);
});
