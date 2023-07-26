import React, { useState } from 'react';
import AdminNavbar from './subComponents/AdminNavbar';
import PaymentTable from './PaymentTable';
import NewPayment from './NewPayment';

const SalaryPaymentList: React.FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber: number) => {
      setActiveTab(tabNumber);
  };

  return (
    <div>
      <aside className="sidebar">
        <nav>
            <a href="#" className="logo">XFarmer</a>
            <div className="nav_items">
                <a onClick={() => handleTabClick(1)} className={activeTab === 1 ? 'active' : ''} href="#">Payments Data</a>
                <a onClick={() => handleTabClick(2)} className={activeTab === 2 ? 'active' : ''} href="#">New Payroll</a>
                <a onClick={() => handleTabClick(3)} className={activeTab === 3 ? 'active' : ''} href="#">New Extraction</a>
                <a onClick={() => handleTabClick(4)} className={activeTab === 4 ? 'active' : ''} href="#">Extraction Data</a>
            </div>
        </nav>
      </aside>
      <div className="mainBlock">
        <div className='details-body'>
        <AdminNavbar />
          {activeTab === 1 &&  <div className='downBlock'>
            <h1>Farmers Payment</h1>
            <PaymentTable />
          </div>}

          {activeTab === 2 && <div className='downBlock'>
            <h1>New Payment</h1>
            <NewPayment />
          </div>}
          {activeTab === 3 && <div className='downBlock'>
            <h1>New Extraction</h1>
          </div>}
          {activeTab === 4 && <div className='downBlock'>
            <h1>Extraction Data</h1>
          </div>}
          </div>
        </div>
    </div>
  );
};

export default SalaryPaymentList;
