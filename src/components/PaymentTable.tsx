import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { FiMoreVertical } from 'react-icons/fi';
import { FarmersArray } from "../types/WorkerType";

type Props = {
    farmers: FarmersArray;
};

const PaymentTable: React.FC<Props> = ({ farmers }) => {

    return(
        <div className='data'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Surname</th>
                        <th>Type of Worker</th>
                        <th>Salary Amount</th>
                        <th>Time Recorded</th>
                        <th>Time Balance</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                {farmers.length === 0 ? (
                    <tbody className="noData">
                        <tr><td>No Farmer recorded yet ...</td></tr>
                    </tbody>
                    ) : (
                    <tbody>
                        {farmers.map((farmer, index: number) => (
                            <tr key={index}>
                                <td>{farmer.id}</td>
                                <td>{farmer.name}</td>
                                <td>{farmer.surname}</td>
                                <td>{farmer.workerType}</td>
                                <td>{farmer.salary}</td>
                                <td>{farmer.timeRecorded}</td>
                                <td>{farmer.balanceTime !== null ? farmer.balanceTime : 'Not Set'}</td>
                                <td className="action">
                                <button><AiOutlineEdit /></button>
                                <button>{farmer.balanceTime !== null ? <FiMoreVertical /> : ''}</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    )
}

export default PaymentTable;