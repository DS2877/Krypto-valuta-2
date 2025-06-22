import React, { useState } from 'react';
import api from '../services/api';

function TransactionPage() {
  const [sender, setSender] = useState('');
  const [receiver, setReceiver] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await api.post('/transactions/create', { sender, receiver, amount });
      alert('Transaktion skapad');
    } catch (error) {
      alert('Fel vid skapande av transaktion');
    }
  };

  return (
    <div>
      <h2>Skapa Transaktion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Sender"
          value={sender}
          onChange={(e) => setSender(e.target.value)}
        />
        <input
          type="text"
          placeholder="Receiver"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Skicka Transaktion</button>
      </form>
    </div>
  );
}

export default TransactionPage;