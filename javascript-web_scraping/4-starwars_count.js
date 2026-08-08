#!/usr/bin/node

const request = require('request');

request.get(process.argv[2], (error, response, body) => {
  if (error) {
    console.log(error);
    return;
  }

  const movies = JSON.parse(body).results;
  let count = 0;

  movies.forEach((movie) => {
    movie.characters.forEach((character) => {
      if (character.endsWith('/18/')) {
        count += 1;
      }
    });
  });

  console.log(count);
});
