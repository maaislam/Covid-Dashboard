import React from 'react';

import SearchCountry from './components/SearchCountry';
import CountryData from './components/CountryData';
import CovidData from './components/CovidData';

import CountryContextProvider from './context/CountryContext';
import SelectedCountryContextProvider from './context/SelectedCountryContext';
import InputLoaderContextProvider from './context/InputloaderContext';

import './app.css';

const App = () => {
  return (
    <div className='ui container segment'>
      <InputLoaderContextProvider>
        <CountryContextProvider>
          <SelectedCountryContextProvider>
            <SearchCountry />
            <CountryData />
            <CovidData />
          </SelectedCountryContextProvider>
        </CountryContextProvider>
      </InputLoaderContextProvider>
    </div>
  );
};

export default App;
