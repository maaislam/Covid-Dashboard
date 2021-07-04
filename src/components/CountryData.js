import React, { useContext, useEffect, useRef } from 'react';
import { CountryContext } from '../context/CountryContext';

import { SelectedCountryContext } from '../context/SelectedCountryContext';
import useGetData from '../Hooks/useGetData';

const CountryData = () => {
  const { searchedCountry, setSearchedCountry } = useContext(CountryContext);
  const { setSelectedCountry } = useContext(SelectedCountryContext);
  const ref = useRef();

  const BASE_URL = process.env.REACT_APP_COUNTRY_BASE_URL;

  const endpoint = searchedCountry ? searchedCountry + '?fields=name;alpha3Code' : '';

  const { data } = useGetData(BASE_URL, endpoint);

  const renderSearchSuggetion =
    data &&
    data.map((item, index) => {
      const handleClick = () => {
        setSelectedCountry(item);
        setSearchedCountry('');
      };

      return (
        <div className='item' key={index} onClick={handleClick}>
          <div className='content'>
            <div className='header'>{item.name}</div>
          </div>
        </div>
      );
    });

  useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }
      setSearchedCountry('');
    };

    document.body.addEventListener('click', onBodyClick);
    return () => {
      document.body.removeEventListener('click', onBodyClick);
    };
    // eslint-disable-next-line
  }, []);

  if (searchedCountry && data) {
    return (
      <div className='ui container search-res__container' ref={ref}>
        <div className='ui very relaxed selection list'>{renderSearchSuggetion}</div>
      </div>
    );
  } else {
    return null;
  }
};

export default CountryData;
