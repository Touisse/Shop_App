import React from 'react';
import Line from '../../components/charts/Line';
import './ChartLine.css'



const ChartLine = () => (
    <div className='ChartLine'>
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <div className="w-full">
      <Line />
    </div>
  </div>
  </div>
);

export default ChartLine;