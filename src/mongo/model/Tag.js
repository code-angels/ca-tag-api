
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const TagSchema = new mongoose.Schema({
  soId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
});

const Tag = mongoose.model('Tags', TagSchema);

module.exports = Tag;
