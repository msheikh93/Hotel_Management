const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customerSchema = new Schema({
  firstname: {type: String, required: true, unique: true},
  lastname: {type: String, required: true},
  creditcard: {type: String, required: true},
});

module.exports = mongoose.model('Customer', customerSchema);
