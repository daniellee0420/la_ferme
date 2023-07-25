import React, { useState } from 'react';
import { milkProductions } from '../utils/database';

const MilkProductionForm = () => {
  const [productionDate, setProductionDate] = useState('');
  const [milkQuantity, setMilkQuantity] = useState('');
  const [additionalDetails, setAdditionalDetails] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = milkProductions.length + 1;
    milkProductions.push({
      id,
      productionDate,
      milkQuantity: Number(milkQuantity),
      additionalDetails,
    });
    // Clear form fields after submission
    setProductionDate('');
    setMilkQuantity('');
    setAdditionalDetails('');
  };

  return (
    <div>
      <h2>Milk Production Form</h2>
      <form onSubmit={handleSubmit}>
        Add form fields for production date, milk quantity, additional details, etc.
      </form>
    </div>
  );
};

export default MilkProductionForm;
