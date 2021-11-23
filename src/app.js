const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  const {sayHello} = require('./services/sayHelloWorld');
  
  res.send(sayHello());
});

module.exports = {
  app,
};
