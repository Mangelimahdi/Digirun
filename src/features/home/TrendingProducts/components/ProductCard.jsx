import React from 'react'
import { Link } from 'react-router'

const ProductCard = ({ id, title, images }) => {
    return (
        <Link to={`/products/${id}`} className='flex items-center justify-center gap-2 max-h-50 lg:h-50 w-74  max-w-117.5 lg:w-117.5'>
            <div className='bg-white overflow-hidden rounded-lg shadow  text-center'>
                <img src={`${images[0]}`} alt="محصول" className=' lg:w-44 lg:h-36 w-29 h-30' />
            </div>
            <span className='flex items-center text-gray-300 dark:text-gray-400  w-29 h-30 lg:max-w-55 lg:w-55 line-clamp-2'>{title}s</span>
        </Link>
    )
}

export default ProductCard;