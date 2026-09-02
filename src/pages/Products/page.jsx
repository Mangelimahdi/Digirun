import React, { useState } from 'react';
import Sort from '../../features/products/Sort/Sort';
import Filters from '../../features/products/Filters/Filters';
import ProductCard from '../../components/common/ProductCard/ProductCard';
import { GrSort } from 'react-icons/gr';
import { FaFilter } from 'react-icons/fa6';
import products from '../../data/products.js';

const Products = () => {
  const [activePanel, setActivePanel] = useState(null);

  return (
    <div className='flex flex-col lg:flex-row gap-x-4 mb-5'>
      <div className='flex lg:hidden items-center gap-4 mb-4'>
        <button className='flex items-center gap-2 py-1 px-2 border border-gray-300 dark:border-gray-500 rounded-2xl text-sm text-gray-400 dark:text-gray-500' onClick={() => setActivePanel("sort")}>
          <GrSort />
          مرتب سازی
        </button>
        <button className='flex items-center gap-2 py-1 px-2 border border-gray-300 dark:border-gray-500 rounded-2xl text-sm text-gray-400 dark:text-gray-500' onClick={() => setActivePanel('filter')}>
          <FaFilter />
          فیلتر
        </button>
      </div>
      <Filters
        isOpen={activePanel === 'filter'}
        onClose={() => setActivePanel(null)} />
      <div className='w-full lg:w-3/4'>
        <Sort
          isOpen={activePanel === 'sort'}
          onClose={() => setActivePanel(null)}
        />
        <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8'>
          {
            products.map((product) => (
              <ProductCard {...product} key={product.id} />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Products;