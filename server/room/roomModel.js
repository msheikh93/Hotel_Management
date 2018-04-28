const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const roomSchema = new Schema({
  roomnumber: {type: Number, required: true, unique: true},
});

module.exports = mongoose.model('Room', roomSchema);
