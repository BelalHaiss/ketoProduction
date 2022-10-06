const mongoose = require('mongoose');

const { Schema } = mongoose;

const test = new Schema({
  any: {}
});

module.exports = mongoose.model('Test', test);
