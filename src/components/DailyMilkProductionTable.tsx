import React from 'react';
import { milkProductions } from '../utils/database';

const MilkProductionList: React.FC = () => {
  return (
    <div>
      <h2>Milk Productions List</h2>
      <ul>
        {milkProductions.map((production) => (
          <li key={production.id}>
            Display milk production information
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MilkProductionList;
