import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import SalaryPaymentTable from './components/SalaryPaymentTable';
import SalaryPaymentForm from './components/SalaryPaymentForm';
import DailyMilkProductionTable from './components/DailyMilkProductionTable';
import DailyMilkProductionForm from './components/DailyMilkProductionForm';

const App = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/SalaryPaymentList" element={<SalaryPaymentTable />} />
          <Route path="/SalaryPaymentForm" element={<SalaryPaymentForm />} />
          <Route path="/DailyMilkProductionTable" element={<DailyMilkProductionTable />} />
          <Route path="/DailyMilkProductionForm" element={<DailyMilkProductionForm />} />
        </Routes>
    </Router>
  );
}

export default App;