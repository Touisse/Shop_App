import React from 'react';
import Bar from '../../components/charts/Bar';
import './ChartBar.css'



const ChartLine = () => (
    <div className='ChartBar'>
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <div className="w-full">
      <Bar />
    </div>
  </div>
  </div>
);

export default ChartLine;