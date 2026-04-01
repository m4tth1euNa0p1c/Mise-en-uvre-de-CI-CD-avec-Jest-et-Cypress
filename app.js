const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bienvenue sur notre application CI/CD !');
});

module.exports = app;
