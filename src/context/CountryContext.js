import React, { useState, createContext } from 'react';

export const CountryContext = createContext();

const CountryContextProvider = ({ children }) => {
  const [searchedCountry, setSearchedCountry] = useState('');

  return (
    <CountryContext.Provider value={{ searchedCountry, setSearchedCountry }}>
      {children}
    </CountryContext.Provider>
  );
};

export default CountryContextProvider;
