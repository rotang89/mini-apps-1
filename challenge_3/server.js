const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongo = require('mongodb');

const port = 3000;
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log('handling get request');
  res.sendStatus(200);
  res.end()
})

app.post('/', (req, res) => {
  console.log('handling post request');
  console.log(req.body)
  res.sendStatus(200);
  res.end()
})

app.listen(port, () => {
  console.log('listening at localhost:' + port)
});