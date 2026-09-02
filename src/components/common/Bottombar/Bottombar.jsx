import React, { useEffect } from 'react'
import { NavLink } from 'react-router'
import { IoHomeOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import { BiCategory } from 'react-icons/bi'
import { FaRegUser } from "react-icons/fa6";
import useScrollDirection from '../../../hooks/useScrollDirection';
import clsx from 'clsx';

const Bottombar = () => {
  const isVisible = useScrollDirection();

  return (
    <div className={clsx("fixed flex bottom-0 right-0 left-0 z-30 w-full shadow-gray-300 dark:shadow-primary-300 shadow-100 bg-white dark:bg-dark-100 py-2 sm:px-5 md:hidden transition-transform duration-500",
      isVisible ? "translate-y-0" : "translate-y-full"
    )}>
      <ul className='flex items-center justify-between w-full gap-4 *:text-gray-300 dark:*:text-gray-400' >
        <li className='flex-1'>
          <NavLink to='/' className={({ isActive }) => `flex flex-col items-center justify-center gap-1 text-xs sm:text-sm rounded-2xl ${isActive && "text-white font-bold [&_span]:bg-primary-300 [&_svg]:text-primary-300"}`}>
            <IoHomeOutline className='text-lg' />
            <span className='text-center py-0.5 px-1.5 rounded-xl'>خانه</span>
          </NavLink>
        </li>
        <li className='flex-1'>
          <NavLink to='/categories' className={({ isActive }) => `flex flex-col items-center justify-center gap-1 text-xs sm:text-sm py-1 rounded-2xl ${isActive && "text-white font-bold [&_span]:bg-primary-300 [&_svg]:text-primary-300"}`}>
            <BiCategory className='text-lg' />
            <span className='text-center py-0.5 px-1.5 rounded-xl'>دسته بندی</span>
          </NavLink>
        </li>
        <li className='flex-1'>
          <NavLink to='/products' className={({ isActive }) => `flex flex-col items-center justify-center gap-1 text-xs sm:text-sm  py-1 rounded-2xl ${isActive && "text-white font-bold [&_span]:bg-primary-300 [&_svg]:text-primary-300"}`}>
            <FiShoppingCart className='text-lg' />
            <span className='text-center py-0.5 px-1.5 rounded-xl'>فروشگاه</span>
          </NavLink>
        </li>
        <li className='flex-1'>
          <NavLink to='/account' className={({ isActive }) => `flex flex-col items-center justify-center gap-1 text-xs sm:text-sm py-1 rounded-2xl ${isActive && "text-white font-bold [&_span]:bg-primary-300 [&_svg]:text-primary-300"}`}>
            <FaRegUser className='text-lg' />
            <span className='text-center py-0.5 px-1.5 rounded-xl'>حساب من</span>
          </NavLink>
        </li>
      </ul>
    </div >
  )
}

export default Bottombar