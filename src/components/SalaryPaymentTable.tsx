import React from 'react';
// import '../assets/style/index.scss'
import { salaryPayments } from '../utils/database';
import AdminNavbar from './subComponents/AdminNavbar';
import Sidebar from './subComponents/Sidebar';

const SalaryPaymentList: React.FC = () => {
  return (
    <div>
      <div className="sidebar"><Sidebar /></div>
      <div className="mainBlock">
        <div className='details-body'>
          <AdminNavbar />
          <h2>Salary Payments List: </h2>
          <ul>
            {salaryPayments.map((payment) => (
              <li key={payment.id}>
                <b>Love</b>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SalaryPaymentList;
