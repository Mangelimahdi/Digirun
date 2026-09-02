import React from 'react'
import ProductColors from './components/ProductColors'
import ProductTitle from './components/ProductTitle'
import ProductRating from './components/ProductRating'

const ProductInfo = ({ product }) => {
    return (
        <div className='mb-4'>
            <ProductTitle title={product.title} />
            <ProductRating rating={product.rating} />
            <ProductColors colors={product.colors} />
        </div>
    )
}

export default ProductInfo