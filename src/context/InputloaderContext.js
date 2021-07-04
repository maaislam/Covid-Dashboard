import React, { useState, createContext } from 'react';

export const InputLoaderContext = createContext();

const InputLoaderContextProvider = ({ children }) => {
  const [inputLoader, setInputLoader] = useState(false);

  return (
    <InputLoaderContext.Provider value={{ inputLoader, setInputLoader }}>
      {children}
    </InputLoaderContext.Provider>
  );
};

export default InputLoaderContextProvider;
