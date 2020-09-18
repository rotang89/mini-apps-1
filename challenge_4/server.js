const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'client/dist')))

app.get('/', (req, res) => {
  console.log('handling get request')
  res.sendStatus(200);
  res.end()
})

app.listen(port, () => {
  console.log(`listening at localhost:${port}`)
})