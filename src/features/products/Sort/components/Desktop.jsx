import React from 'react'
import { HiSortDescending } from 'react-icons/hi'

const Desktop = () => {
    return (
        <div className='hidden lg:flex items-center justify-between mb-8'>
            <div className='flex items-center gap-4 lg:gap-x-8 '>
                <div className='flex items-center gap-2 dark:text-gray-400 text-gray-300 text-sm lg:text-base'>
                    <HiSortDescending className='text-xl' />
                    <h2>مرتب سازی:</h2>
                </div>
                <ul className='flex items-center gap-4 lg:gap-8 text-sm lg:text-base *:text-gray-300 *:dark:text-gray-400 *:hover:text-primary-400 *:hover:dark:text-primary-300 *:transition-all duration-300 *:cursor-pointer'>
                    <li>محبوب ترین</li>
                    <li>پر فروش ترین</li>
                    <li>ارزان ترین</li>
                    <li>گران ترین ترین</li>
                </ul>
            </div>
            <span className='text-gray-300 dark:text-gray-400 text-sm lg:text-base'>
                1,203 کالا
            </span>
        </div>
    )
}

export default Desktop