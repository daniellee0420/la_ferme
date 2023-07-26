import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import SalaryPaymentTable from './components/MainBody';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/SalaryPaymentList" element={<SalaryPaymentTable />} />
        </Routes>
    </Router>
  );
}

export default App;