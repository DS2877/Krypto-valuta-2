import React, { useState, useEffect } from 'react';
import api from '../services/api';

function BlockPage() {
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    const fetchBlocks = async () => {
      try {
        const response = await api.get('/blocks');
        setBlocks(response.data);
      } catch (error) {
        alert('Fel vid hämtning av block');
      }
    };
    fetchBlocks();
  }, []);

  return (
    <div>
      <h2>Block</h2>
      <ul>
        {blocks.map((block, index) => (
          <li key={index}>{JSON.stringify(block)}</li>
        ))}
      </ul>
    </div>
  );
}

export default BlockPage;