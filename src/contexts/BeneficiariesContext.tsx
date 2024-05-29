import React, { createContext, useState } from 'react';

export const BeneficiariesContext = createContext();

export const BeneficiariesProvider = ({ children }) => {
  const [beneficiaries, setBeneficiaries] = useState([]);

  const addBeneficiary = (beneficiary) => {
    setBeneficiaries([...beneficiaries, beneficiary]);
  };

  return (
    <BeneficiariesContext.Provider value={{ beneficiaries, addBeneficiary }}>
      {children}
    </BeneficiariesContext.Provider>
  );
};
