import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import TransactionPage from './pages/TransactionPage';
import BlockPage from './pages/BlockPage';
import HomePage from './pages/HomePage';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/transactions" element={<TransactionPage />} />
          <Route path="/blocks" element={<BlockPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;