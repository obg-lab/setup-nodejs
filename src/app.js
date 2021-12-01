const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  const { sayHello } = require('./services/sayHelloWorld');
  const { name } = req.query
  if (!name) {
    return res.send(sayHello());
  }
  return res.send(sayHello(name));
});

module.exports = {
  app,
};
