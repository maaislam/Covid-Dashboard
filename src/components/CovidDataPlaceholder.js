import React from 'react';

const CovidDataPlaceholder = () => {
  return (
    <div className='ui inverted segment '>
      <div className='ui active inverted placeholder'>
        <div className='image header'>
          <div className='line'></div>
          <div className='line'></div>
        </div>
      </div>
      <div className='ui inverted four column grid'>
        <div className='column'>
          <div className='ui active inverted placeholder'>
            <div className='medium line'></div>
            <div className='long line'></div>
          </div>
        </div>
        <div className='column'>
          <div className='ui active inverted placeholder'>
            <div className='medium line'></div>
            <div className='long line'></div>
          </div>
        </div>
        <div className='column'>
          <div className='ui active inverted placeholder'>
            <div className='medium line'></div>
            <div className='long line'></div>
          </div>
        </div>
        <div className='column'>
          <div className='ui active inverted placeholder'>
            <div className='medium line'></div>
            <div className='long line'></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CovidDataPlaceholder;
