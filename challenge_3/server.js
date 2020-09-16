const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log('handling get request');
  res.sendStatus(200);
  res.send('hello world');
})

const port = 3000;

app.listen(port, () => {
  console.log('listening at localhost:' + port)
});