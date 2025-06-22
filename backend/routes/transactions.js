const express = require('express');
const { addTransactionToPool } = require('../utils/blockchain');
const auth = require('../middleware/auth');
const router = express.Router();

router.post('/create', auth, async (req, res) => {
  const { sender, receiver, amount } = req.body;
  addTransactionToPool(sender, receiver, amount);
  res.status(201).send('Transaction added to pool');
});

module.exports = router;