import React from 'react'
import Favorite from './components/Favorite';
import Comparison from './components/Comparison';
import Share from './components/Share';

const ProductActions = ({ productId }) => {
  return (
    <div className='flex items-center gap-2'>
      <Favorite productId={productId} />
      <Comparison />
      <Share />
    </div>
  )
}

export default ProductActions