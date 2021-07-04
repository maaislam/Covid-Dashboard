import React, { useState, createContext } from 'react';

export const SelectedCountryContext = createContext();

const SelectedCountryContextProvider = ({ children }) => {
  const [selectedCountry, setSelectedCountry] = useState('');

  return (
    <SelectedCountryContext.Provider value={{ selectedCountry, setSelectedCountry }}>
      {children}
    </SelectedCountryContext.Provider>
  );
};

export default SelectedCountryContextProvider;
