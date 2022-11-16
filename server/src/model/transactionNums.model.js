const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const transactionNumSchema = new Schema({
  transactionNum: {
    type: String,
    required: true,
    unique: true
  },
  token: {
    type: String,
    required: true
  }
});
module.exports = mongoose.model('TransactionNum', transactionNumSchema);
