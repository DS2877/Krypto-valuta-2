const express = require('express');
const { createNewBlock } = require('../utils/blockchain');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/mine', auth, async (req, res) => {
  const previousBlock = blockchain[blockchain.length - 1] || {};
  const newBlock = createNewBlock(previousBlock.hash, ['Transaction 1', 'Transaction 2']);  // Example transactions
  res.status(201).send(newBlock);
});

module.exports = router;