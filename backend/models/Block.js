const mongoose = require('mongoose');

const blockSchema = new mongoose.Schema({
  index: Number,
  previousHash: String,
  timestamp: String,
  transactions: [String], // Array of transaction IDs
  hash: String,
  nonce: Number,
});

module.exports = mongoose.model('Block', blockSchema);