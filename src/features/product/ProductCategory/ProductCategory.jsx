import React from 'react'

const ProductCategory = ({ brand, category }) => {
    return (
        <div className='text-sm text-primary-300'>
            <span>{brand}</span>
            <span>/</span>
            <span>{category}</span>
        </div>
    )
}

export default ProductCategory