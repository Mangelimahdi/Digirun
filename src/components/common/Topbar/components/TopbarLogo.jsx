import React from 'react'
import Logo from '../../Logo';

const TopbarLogo = () => {
    return (
        <div className='gap-0.5 hidden sm:flex sm:flex-col sm:gap-1'>
            <Logo />
            <h4 className='text-xs text-gray-300 dark:text-gray-400 hidden md:block transition-colors duration-300'>سایت فروش محصولات دیجیتال</h4>
        </div>
    )
}

export default TopbarLogo;