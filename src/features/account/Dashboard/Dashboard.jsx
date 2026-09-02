import React from 'react';
import Summaries from '../Summaries/Summaries';
import Orders from '../Orders/Orders';
import Addresses from '../Addresses/Addresses';

const Dashboard = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row gap-y-4 lg:gap-6 mb-4 xl:mb-8'>
        <Summaries />
      </div>
      <Orders />
      <Addresses />
    </>
  )
}

export default Dashboard