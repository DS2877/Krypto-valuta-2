const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const WebSocket = require('ws');
const redis = require('redis');
const { userRouter, transactionRouter, blockRouter } = require('./routes');

const app = express();

// Middleware
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/cryptocurrency', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// WebSocket server
const wss = new WebSocket.Server({ noServer: true });
wss.on('connection', (ws) => {
  ws.on('message', (message) => {
    console.log('Received message: ', message);
  });
});

// Routes
app.use('/api/users', userRouter);
app.use('/api/transactions', transactionRouter);
app.use('/api/blocks', blockRouter);

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});