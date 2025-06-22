const crypto = require('crypto');
const Transaction = require('../models/Transaction');
const Block = require('../models/Block');

let blockchain = [];
let transactionPool = [];

function createNewBlock(previousHash, transactions) {
  const index = blockchain.length + 1;
  const timestamp = new Date().toISOString();
  const nonce = Math.floor(Math.random() * 10000);
  const blockData = JSON.stringify({ index, previousHash, timestamp, transactions, nonce });
  const hash = crypto.createHash('sha256').update(blockData).digest('hex');
  const newBlock = new Block({ index, previousHash, timestamp, transactions, hash, nonce });
  blockchain.push(newBlock);
  return newBlock;
}

function addTransactionToPool(sender, receiver, amount) {
  const transaction = new Transaction({ sender, receiver, amount });
  transactionPool.push(transaction);
}

module.exports = { createNewBlock, addTransactionToPool, blockchain, transactionPool };