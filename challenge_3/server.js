const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');

const port = 3000;
const app = express();
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);

const test = {name: "johnny"};

// MongoClient.connect(uri, function(err, db) {
//   if (err) {
//     console.log(err, 'mongo error')
//   } else {
//     db.collection('checkout').insertOne(test)
//     console.log('connected')
//     db.close()
//   }
// })

mongoose.connect(uri, { useNewUrlParser: true });
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var Schema = mongoose.Schema;
var CheckoutSchema = new Schema({
  name: String,
  password: String,
  line1: String,
  line2: String,
  city: String,
  state: String,
  zipCode: String,
  phoneNumber: String,
  creditCardNumber: String,
  expirationDate: String,
  CVV: String,
  billingZipCode: String
})
var CheckoutModel = mongoose.model('CheckoutModel', CheckoutSchema)

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.post('/', (req, res) => {
  console.log('handling post request');
  CheckoutModel.create({
    name: req.body.name,
    password: req.body.password,
    line1: req.body.line1,
    line2: req.body.line2,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    phoneNumber: req.body.phoneNumber,
    creditCardNumber: req.body.creditCardNumber,
    expirationDate: req.body.expirationDate,
    CVV: req.body.CVV,
    billingZipCode: req.body.billingZipCode
  }, function (err, instance) {
    if (err) {
      console.log(err)
    } else {
      // console.log(instance);
      CheckoutModel.find({}, 'name', function(err, checkouts) {
        if (err) {
          return handleError(err);
        } else {
          console.log(checkouts)
        }
      })
      instance.save(function (err) {
        if (err) {
          console.log(err)
        }
      })
    }
  })
  res.end()
  })

app.listen(port, () => {
  console.log('listening at localhost:' + port)
});