const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const api = require('./routes/api');
const app = express();

const mongoose   = require('mongoose');
mongoose.connect('mongodb://joker:jp@ds023088.mlab.com:23088/dessolencia');

app.use(express.static(path.join(__dirname, 'build')));
app.use(bodyParser());

app.use('/api', api)

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(8080);
