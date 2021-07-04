import React, { useContext } from 'react';

import { SelectedCountryContext } from '../context/SelectedCountryContext';
import useGetData from '../Hooks/useGetData';
import CovidDataPlaceholder from './CovidDataPlaceholder';

const CovidData = () => {
  const { selectedCountry } = useContext(SelectedCountryContext);

  const cov_base_url = process.env.REACT_APP_COVID_BASE_URL;

  var cleanData = selectedCountry.alpha3Code;

  const { data } = useGetData(cov_base_url, cleanData);

  if (data && selectedCountry) {
    const { cases, deaths, todayCases, todayDeaths, countryInfo, country, updated } =
      data;

    const updateTime = new Date(updated);

    return (
      <div className='ui container inverted segment'>
        <div className='flex justify-between'>
          <h1 className='ui header inverted'>
            <img src={countryInfo.flag} alt={country} className='ui image' />
            <div className='content'> {country}</div>
          </h1>
          <div className='value right floated'> {updateTime.toDateString()}</div>
        </div>
        <div className='ui inverted statistics'>
          <div className='statistic'>
            <div className='value'>{cases.toLocaleString('en-US')}</div>
            <div className='label'>Infected Patients</div>
          </div>
          <div className='inverted red statistic'>
            <div className='value'>{deaths.toLocaleString('en-US')}</div>
            <div className=' label'>Deaths so far</div>
          </div>
          <div className='statistic'>
            <div className='value'>{todayCases}</div>
            <div className='label'>Today's Infection Count</div>
          </div>
          <div className='inverted red statistic'>
            <div className='value'>{todayDeaths}</div>
            <div className='label'>Today's Death Toll</div>
          </div>
        </div>
      </div>
    );
  } else if (selectedCountry && !data) {
    return <CovidDataPlaceholder />;
  } else {
    return null;
  }
};
export default CovidData;
