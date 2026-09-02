import React from 'react'
import { Link } from 'react-router'

const Logo = () => {
    return (
        <h2>
            <Link to="/" className='text-gray-400 dark:text-gray-500 flex items-center md:gap-1 gap-0.5 text-sm font-extrabold sm:text-xl md:text-2xl lg:text-3xl transition-colors duration-300'>
                دیجی
                <span className='text-primary-300'>ران</span>
            </Link>
        </h2>
    )
}

export default Logo