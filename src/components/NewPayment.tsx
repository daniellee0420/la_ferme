import React, { useState } from 'react';
import { salaryPayments } from '../utils/database';

const NewPayment = () => {
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
    <div className='data'>
      <div className="form-content">
        <form onSubmit={handleSubmit}>
          <div className="names">
            <div>
              <label>Name: </label><br />
              <input type="text" placeholder="Work's Name" onChange={(e) => setWorkerName(e.target.value)} />
            </div>
            <div>
              <label>Surname: </label><br />
              <input type="text" placeholder="Work's Surname" onChange={(e) => setWorkerName(e.target.value)} />
            </div>
          </div>

          <div className="amount">
            <div className="amountIpt">
              <label>The amount: </label><br />
              <input type="number" min="100" className="amountIpt" placeholder='Minimum 100$' onChange={(e) => setWorkerName(e.target.value)} />
            </div>
            <div className="casual">
              <fieldset className="checkbox-group">
                <legend className="checkbox-group-legend">Type of worker: </legend>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input type="radio" value="value1" checked name="question1" className="checkbox-input" />
                    <span className="checkbox-tile">
                      <span className="checkbox-label">Monthly Paid</span>
                    </span>
                  </label>
                </div>
                <div className="checkbox">
                  <label className="checkbox-wrapper">
                    <input type="radio" value="value1" name="question1" className="checkbox-input" />
                    <span className="checkbox-tile">
                      <span className="checkbox-label">Cosual Paid</span>
                    </span>
                  </label>
                </div>
              </fieldset>
            </div>
            <div className="payTime">
              <label>Time of balance to be paid: </label><br />
              <input type="date" placeholder='Payment time' onChange={(e) => setWorkerName(e.target.value)} />
            </div>
          </div>
          <div className='submit'>
            <small className='warning'><b>WARNING: </b>This payment will save with this Date: 23/34/2012</small>
            <button type="submit">Make a Payement</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPayment;
