import React from 'react'
import { Link } from 'react-router'

const FooterMenus = () => {
    return (
        <div className='flex-1 w-full sm:w-auto'>
            <h2 className='text-white text-center sm:text-start text-lg lg:text-xl mb-4 lg:mb-10.5 '>
                دسترسی سریع
            </h2>
            <ul className='flex flex-col items-center sm:items-start gap-1 md:gap-4 w-full'>
                <li>
                    <Link to="/" className='text-gray-300 dark:text-gray-400 text-sm md:text-base hover:text-primary-300 transition-colors duration-300'>
                        صفحه اصلی
                    </Link>
                </li>
                <li>
                    <Link to="/" className='text-gray-300 dark:text-gray-400 text-sm md:text-base hover:text-primary-300 transition-colors duration-300'>
                        فروشگاه
                    </Link>
                </li>
                <li>
                    <Link to="/" className='text-gray-300 dark:text-gray-400 text-sm md:text-base hover:text-primary-300 transition-colors duration-300'>
                        تماس با ما
                    </Link>
                </li>
                <li>
                    <Link to="/" className='text-gray-300 dark:text-gray-400 text-sm md:text-base hover:text-primary-300 transition-colors duration-300'>
                        سوالات متداول
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterMenus