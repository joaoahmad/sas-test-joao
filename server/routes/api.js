var express = require('express');
var router = express.Router();

var calls = require('./api/calls');

router.route('/calls')
.get(function(req, res){ calls.get(req, res) })
.post(function(req, res){ calls.add(req, res) });

router.route('/calls/:id')
.get(function(req, res){ calls.view(req, res) });

module.exports = router;
