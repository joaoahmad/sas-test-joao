const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./routes/api');
const app = express();

const mongoose = require('mongoose');
mongoose.connect('mongodb://hastur:jp010101@ds135433.mlab.com:35433/sas-test', { useNewUrlParser: true });

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', api)

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080);
