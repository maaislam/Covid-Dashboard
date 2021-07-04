import React, { useContext, useState } from 'react';
import { CountryContext } from '../context/CountryContext';
import { InputLoaderContext } from '../context/InputloaderContext';

const SearchCountry = () => {
  const [input, setInput] = useState('');
  const { inputLoader, setInputLoader } = useContext(InputLoaderContext);

  const { setSearchedCountry } = useContext(CountryContext);

  const onInputChange = (e) => {
    setInput(e.target.value);
    setInputLoader(true);
    setSearchedCountry(e.target.value);
  };

  return (
    <div className={`ui container icon input ${inputLoader && input ? 'loading' : ''}`}>
      <input
        type='text'
        placeholder='search country'
        value={input}
        onChange={onInputChange}
        style={{ position: 'relative' }}
      />
      <i className='search icon'></i>
    </div>
  );
};

export default SearchCountry;
