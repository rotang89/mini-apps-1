const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('express');
const fs = require('fs');
// const fileUpload = require('express-fileupload');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('client'));
// app.use(fileUpload({createParentPath: true}));

// app.get('/', (req, res) => {
  //   res.sendStatus(200)
  //   res.send('Hello Woraaaald!')
  // })

app.post('/upload_json', (req, res) => {
  console.log('incoming post request')
  console.log(req.body)
  res.sendStatus(200)
  res.end()
})

const port = 3000;
app.listen(port, () => {
  console.log('listening at port localhost:' + port)
})

/////////
