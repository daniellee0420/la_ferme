import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import SalaryPaymentTable from './components/MainBody';

const App = () => {
  const loggedInStatus = localStorage.getItem('loggedInUser');

  return (
    <Router>
        <Routes>
          {loggedInStatus ? (
            <>
              <Route path="/" element={<SalaryPaymentTable />} />
              <Route path="/La_ferme" element={<SalaryPaymentTable />} />
            </>
          ) : (
            <>
              <Route path="/" element={<LoginForm />} />
              <Route path="/login" element={<LoginForm />} />
            </>
          )}
        </Routes>
    </Router>
  );
}

export default App;