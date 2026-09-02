import React from 'react'
import { BiMap, BiMenu } from 'react-icons/bi';
import { FaAngleDown } from 'react-icons/fa';
import { Link } from 'react-router';
import CategoryMegaMenu from './CategoryMegaMenu';

const TopbarMenu = ({ onToggle }) => {
    return (
        <div className='bg-gray-500 dark:bg-dark-100 w-full flex items-center justify-between rounded-3xl md:rounded-4xl px-3 py-2.5 sm:px-4 sm:py-3.5 md:px-8 md:py-5 text-white lg:px-8'>
            <div>
                <ul className='hidden md:flex items-center gap-4 lg:gap-12 *:text-sm'>
                    <li>
                        <Link to='/' className='relative flex items-center after:absolute after:w-0 after:h-0.5 after:rounded-full after:right-1/2 after:translate-x-1/2 after:-bottom-1.5 after:bg-primary-300 hover:after:w-full hover:after:h-0.5 after:transition-[width] after:duration-300'>
                            صفحه اصلی
                        </Link>
                    </li>
                    <li>
                        <CategoryMegaMenu />
                    </li>
                    <li>
                        <Link to='/products' className='relative flex items-center after:absolute after:w-0 after:h-0.5 after:rounded-full after:right-1/2 after:translate-x-1/2 after:-bottom-1.5 after:bg-primary-300 hover:after:w-full hover:after:h-0.5 after:transition-[width] after:duration-300'>
                            فروشگاه
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='relative flex items-center after:absolute after:w-0 after:h-0.5 after:rounded-full after:right-1/2 after:translate-x-1/2 after:-bottom-1.5 after:bg-primary-300 hover:after:w-full hover:after:h-0.5 after:transition-[width] after:duration-300'>
                            وبلاگ
                        </Link>
                    </li>
                    <li>
                        <Link to='/' className='relative flex items-center after:absolute after:w-0 after:h-0.5 after:rounded-full after:right-1/2 after:translate-x-1/2 after:-bottom-1.5 after:bg-primary-300 hover:after:w-full hover:after:h-0.5 after:transition-[width] after:duration-300'>
                            درباره ما
                        </Link>
                    </li>
                </ul>
                <button type='button' className='border-0 outline-0 flex md:hidden cursor-pointer' onClick={onToggle}>
                    <BiMenu className=' text-xl' />
                </button>
            </div>
            <button type='button' className='hidden md:flex text-sm items-center gap-2 cursor-pointer'>
                <BiMap className='text-lg lg:text-xl' />
                ادرس خود را وارد کنید
            </button>
        </div>
    )
}

export default TopbarMenu