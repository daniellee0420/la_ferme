import React, { useState } from 'react';
import { AiOutlineEdit } from 'react-icons/ai';
import { MilksArray } from "../types/MilkProductionType";

type Props = {
    milks: MilksArray;
};

const ExtractingTable: React.FC<Props> = ({ milks }) => {
    console.log(milks)

    return(
        <div className='data'>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Quantity of Milk</th>
                        <th>Date</th>
                        <th style={{ maxWidth: '100px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>Comments</th>
                        <th>Options</th>
                    </tr>
                </thead>
                {milks.length === 0 ? (
                    <tbody className="noData">
                        <tr><td>No Milk produced yet ...</td></tr>
                    </tbody>
                    ) : (
                    <tbody>
                        {milks.map((milk, index: number) => (
                            <tr key={index}>
                                <td>{milk.id}</td>
                                <td>{milk.dateProd}</td>
                                <td>{milk.quantity}</td>
                                <td style={{ maxWidth: '400px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{milk.description}</td>
                                <td className="action">
                                    <button><AiOutlineEdit /></button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                )}
            </table>
        </div>
    )
}

export default ExtractingTable;