import React from 'react'
import { IoEyeOutline } from "react-icons/io5";
import { PiCalendarDots } from "react-icons/pi";
import { Link } from 'react-router';

const ArticleCard = ({ title, image }) => {
    return (
        <div className='group bg-white dark:bg-dark-100 rounded-lg p-1 cursor-pointer md:px-2 md:pt-4.5 md:pb-2 shadow-100 transition-transform duration-300 group-hover:-translate-y-3.5'>
            <div className='relative rounded-t-lg overflow-hidden min-h-35 h-35 max-h-42 lg:h-41.25 mb-2'>
                <img src={image} alt={title} className='w-full h-full object-cover' />
                <div className='flex items-center justify-center absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-gray-500/60 dark:bg-gray-100/60'>
                    <Link to='/' className='rounded-4xl border py-1 md:py-2 text-white px-4 md:px-7.5'>
                        ادامه مطلب
                    </Link>
                </div>
            </div>
            <div className='text-start'>
                <h2 className='text-sm md:text-base text-gray-300 dark:text-gray-400 mb-2 line-clamp-1'>{title}</h2>
                <div className='flex items-center justify-between'>
                    <span className='flex items-center gap-1 text-gray-300 dark:text-gray-400 text-sm md:text-base'>
                        <IoEyeOutline className='text-2xl' />
                        120
                    </span>
                    <span className='flex items-center gap-1 text-sm md:text-base text-primary-300'>
                        <PiCalendarDots className='text-2xl' />
                        1405/3/19
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard