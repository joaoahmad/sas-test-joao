var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CallSchema = new Schema({
    type: String,
    reason: String,
    description: String,
    state: String,
    operator: String,
});

module.exports = mongoose.model('Call', CallSchema);
