import React from 'react';

import { pieChartData } from '../../data/dummy';
import Pie from '../../components/charts/Pie';
import './ChartPie.css'

const ChartPie = () => (
    <div className='ChartPie'>
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <div className="w-full">
      <Pie id="chart-pie" data={pieChartData} legendVisiblity height="full" />
    </div>
  </div>
  </div>
);

export default ChartPie;