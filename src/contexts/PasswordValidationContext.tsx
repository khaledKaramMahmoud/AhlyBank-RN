import React, { createContext, useState } from 'react';

export const PasswordValidationContext = createContext();

export const PasswordValidationProvider = ({ children }) => {
  const [password, setPassword] = useState('');
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [isMinLength, setIsMinLength] = useState(false);

  const validatePassword = (value) => {
    setPassword(value);
    setHasLowerCase(/[a-z]/.test(value));
    setHasUpperCase(/[A-Z]/.test(value));
    setHasNumber(/[0-9]/.test(value));
    setHasSpecialChar(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(value));
    setIsMinLength(value.length >= 8);
  };

  const contextValues = {
    password,
    validatePassword,
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasSpecialChar,
    isMinLength,
  };

  return (
    <PasswordValidationContext.Provider value={contextValues}>
      {children}
    </PasswordValidationContext.Provider>
  );
};
