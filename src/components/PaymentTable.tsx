import React, { useState } from 'react';
import { FaHome, FaUsers, FaSearch } from 'react-icons/fa';
import AdminNavbar from './subComponents/AdminNavbar';

const PaymentTable = () => { 

    return(
        <div className='data'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><span className="res-head">Id:</span>01</td>
                        <td><span className="res-head">Firstname:</span>Joydip</td>
                        <td><span className="res-head">Lastname:</span>Paul</td>
                        <td><span className="res-head">Email:</span>joydip@gmail.com</td>
                        <td className="action">
                        <button>Add</button>
                        <button>Edit</button>
                        <button>Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default PaymentTable;