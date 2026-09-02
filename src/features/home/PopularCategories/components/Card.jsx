import React from 'react'
import { Link } from 'react-router'

const Card = ({ id, title, image }) => {
    console.log(title)
    return (
        <Link to={`/categories/${id}`} className='flex flex-col items-center focus-within:-translate-y-3 hover:-translate-y-3 transition-all duration-300 -bg-linear-150'>
            <div className=' w-16 h-16 md:w-20 md:h-20 lg:w-25 lg:h-25 xl:w-32 xl:h-32 border-3 shadow-200 bg-white border-secondary-200 rounded-full mb-2 md:mb-6'>
                <img src={image} className='w-full h-full object-cover' />
            </div>
            <span className='text-gray-400 dark:text-gray-400 text-sm lg:text-xl line-clamp-1'>{title}</span>
        </Link>
    )
}

export default Card;