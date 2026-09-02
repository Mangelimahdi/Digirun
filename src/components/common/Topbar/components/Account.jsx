import React from 'react'
import { BiSolidUser } from 'react-icons/bi'
import { Link } from 'react-router'
import { IoBagOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { HiOutlineUserCircle } from "react-icons/hi";
import { GoBell } from "react-icons/go";

const Account = () => {
    return (
        <div className='group relative hidden p-2 md:block border border-gray-200 dark:border-gray-300 rounded-full cursor-pointer transition-all duration-300 hover:bg-primary-300'>
            <Link to="/account" className=' group-hover:*:text-white *:transition-all *:duration-300 '>
                <BiSolidUser className='md:text-xl lg:text-3xl text-xs text-gray-300 dark:text-gray-400' />
            </Link>
            <ul className='absolute right-0 bg-white dark:bg-dark-100 text-base shadow-100 w-52 p-2 flex flex-col gap-y-3 z-30 top-20 rounded-lg translate-y-1 opacity-0 invisible transition-all duration-300 delay-100 group-hover:opacity-100 group-hover:visible group-hover:-translate-y-3 text-gray-400 dark:text-gray-500'>
                <li>
                    <Link to='/account/profile' className='flex items-center gap-x-2 py-2 px-1 hover:bg-primary-300 hover:text-white rounded-lg transition-all duration-300'>
                        <HiOutlineUserCircle className='text-xl' />
                        اطلاعات حساب
                    </Link>
                </li>
                <li>
                    <Link to='/account/orders' className='flex items-center gap-x-2 py-2 px-1 hover:bg-primary-300 hover:text-white rounded-lg transition-all duration-300'>
                        <IoBagOutline className='text-xl' />
                        سفارشات من
                    </Link>
                </li>
                <li>
                    <Link to='/account/messages' className='flex items-center gap-x-2 py-2 px-1 hover:bg-primary-300 hover:text-white rounded-lg transition-all duration-300'>
                        <GoBell className='text-xl' />
                        اعلان ها
                    </Link>
                </li>
                <li>
                    <Link className='flex items-center gap-x-2 py-2 px-1 hover:bg-primary-300 hover:text-white rounded-lg transition-all duration-300'>
                        <IoIosLogOut className='text-xl' />
                        خروج
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Account