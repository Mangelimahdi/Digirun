import React from 'react'
import { FaRegStar } from "react-icons/fa";
const ProductRating = () => {
    return (
        <div className='flex items-center gap-2 mt-4'>
            <span className='flex items-center gap-1 text-xs text-gray-400 dark:text-gray-400'>
                <FaRegStar className='text-warning text-lg' />
                {4.4}
            </span>

            <span className='text-gray-300 dark:text-gray-400 text-xs'>(امتیاز 159 خریدار)</span>
            <span className='p-1 rounded-2xl text-xs bg-gray-200 dark:bg-[#4F5459] text-gray-400 dark:text-gray-500'>84 نظر</span>
        </div>
    )
}

export default ProductRating