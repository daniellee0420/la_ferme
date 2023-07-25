import React, { useState } from 'react';
import { salaryPayments } from '../utils/database';

const SalaryPaymentForm: React.FC = () => {
  const [workerName, setWorkerName] = useState('');
  const [salaryAmount, setSalaryAmount] = useState('');
  const [paymentTime, setPaymentTime] = useState('');
  const [workerType, setWorkerType] = useState<'casual' | 'monthly'>('casual');
  const [balanceTime, setBalanceTime] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = salaryPayments.length + 1;
    salaryPayments.push({
      id,
      workerName,
      salaryAmount: Number(salaryAmount),
      paymentTime,
      workerType,
      balanceTime: workerType === 'monthly' ? balanceTime : undefined,
    });
    // Clear form fields after submission
    setWorkerName('');
    setSalaryAmount('');
    setPaymentTime('');
    setBalanceTime('');
  };

  return (
    <div>
      <h2>Salary Payment Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Work's Name" onChange={(e) => setWorkerName(e.target.value)} />
        <input type="text" placeholder='Salary Amount' onChange={(e) => setWorkerName(e.target.value)} />
        <input type="time" placeholder='Payment time' onChange={(e) => setWorkerName(e.target.value)} />
        <div>
            <label>
                <input type="radio" value="Male"/>
                Casual Paid
            </label>
            <label>
                {/* <input type="radio" value="Male" onChange={setPaymentTime}/> */}
                Monthly Paid
            </label>
        </div>
        <input type="time" placeholder='Payment time' onChange={(e) => setWorkerName(e.target.value)} />
      </form>
    </div>
  );
};

export default SalaryPaymentForm;
