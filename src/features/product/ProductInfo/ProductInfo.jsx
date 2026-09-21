import React from 'react'
import ProductColors from './components/ProductColors'
import ProductTitle from './components/ProductTitle'
import ProductRating from './components/ProductRating'

const ProductInfo = ({ product, selectedColor,
    onColorChange }) => {
    return (
        <div className='mb-4'>
            <ProductTitle title={product.title} />
            <ProductRating rating={product.rating} />
            <ProductColors
                colors={product.colors}
                selectedColor={selectedColor}
                onColorChange={onColorChange}
            />
        </div>
    )
}

export default ProductInfo