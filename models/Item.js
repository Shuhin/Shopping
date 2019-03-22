const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;

const ItemSchema = new Schema({
name: {
  type: String,
  required: true
},
date: {
  type: Date,
  default: Date.now
}
});

module.exports = Item = Mongoose.model('item', ItemSchema);
