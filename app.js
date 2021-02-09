const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/youtube', (req, res) => {
  res.status(200).send('Hello, Youtube');
});

module.exports = app;
