import React, { useEffect } from 'react'
import { FaRegEdit, FaTimes } from "react-icons/fa";
import { IoBagHandleOutline } from 'react-icons/io5';
import { Link, NavLink, useLocation } from 'react-router';
import { RxDashboard } from "react-icons/rx";
import { MdFavoriteBorder } from "react-icons/md";
import { FiMapPin } from "react-icons/fi";
import { GoBell } from "react-icons/go";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";

import clsx from 'clsx';

const AccountSidebar = ({ isOpen, onClose }) => {
    const location = useLocation();

    useEffect(() => {
        onClose();
    }, [location.pathname]);

    return (
        <>
            <aside className={clsx('fixed right-0 bottom-0 z-50 transition-transform duration-300 flex flex-col h-[50dvh] overflow-y-auto gap-y-4 shadow-100 px-3 py-4 xl:px-6 xl:py-8 lg:h-fit bg-white dark:bg-dark-100 rounded-lg w-full lg:w-1/4 lg:sticky lg:top-auto lg:right-auto lg:translate-y-0 ',
                isOpen ? 'translate-y-0' : 'translate-y-full'
            )}>
                <div className='mb-4 lg:hidden'>
                    <button className='flex justify-start w-full text-gray-400 dark:text-gray-400 text-xl' onClick={onClose}>
                        <FaTimes />
                    </button>
                </div >
                <div className='flex items-center justify-between border-b border-gray-200 dark:border-gray-300 pb-3'>
                    <div className='flex items-center md:gap-x-4'>
                        <img src="/images/avatar/avatar1.webp" alt="user" className='w-10 xl:w-15 rounded-full' />
                        <div className='flex flex-col text-sm xl:text-base'>
                            <span className='text-gray-400 dark:text-gray-500'>مهدی منگلی</span>
                            <span className='text-gray-300 dark:text-gray-400'>09131234567</span>
                        </div>
                    </div>
                    <Link to="profile" className='cursor-pointer'>
                        <FaRegEdit className="text-xl xl:text-2xl text-primary-300" />
                    </Link>
                </div>
                <ul className='flex flex-col gap-y-2'>
                    <li>
                        <NavLink
                            to='.'
                            end
                            className={({ isActive }) => `flex items-center gap-x-2 text-gray-400 p-1.5 xl:p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-dark-200  hover:text-primary-300 transition-all duration-300 text-sm xl:text-base ${isActive && "text-primary-300 bg-primary-100 dark:bg-dark-200"}`}>
                            <RxDashboard className='text-lg xl:text-xl' />
                            داشبورد
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='orders'
                            className={({ isActive }) => `flex items-center gap-x-2 text-gray-400 p-1.5 xl:p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-dark-200 hover:text-primary-300 transition-all duration-300 text-sm xl:text-base ${isActive && "text-primary-300 bg-primary-100 dark:bg-dark-200"}`}>
                            <IoBagHandleOutline className='text-lg xl:text-xl' />
                            سفارش ها
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='favorites'
                            className={({ isActive }) => `flex items-center gap-x-2 text-gray-400 p-1.5 xl:p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-dark-200 hover:text-primary-300 transition-all duration-300 text-sm xl:text-base ${isActive && "text-primary-300 bg-primary-100 dark:bg-dark-200"}`}>
                            <MdFavoriteBorder className='text-lg xl:text-xl' />
                            علاقه مندی ها
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='addresses'
                            className={({ isActive }) => `flex items-center gap-x-2 text-gray-400 p-1.5 xl:p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-dark-200 hover:text-primary-300 transition-all duration-300 text-sm xl:text-base ${isActive && "text-primary-300 bg-primary-100 dark:bg-dark-200"}`}>
                            <FiMapPin className='text-lg xl:text-xl' />
                            ادرس ها
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/account/messages'
                            className={({ isActive }) => `flex items-center gap-x-2 text-gray-400 p-1.5 xl:p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-dark-200 hover:text-primary-300 transition-all duration-300 text-sm xl:text-base ${isActive && "text-primary-300 bg-primary-100 dark:bg-dark-200"}`}>
                            <GoBell className='text-lg xl:text-xl' />
                            پیام ها
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/account/profile'
                            className={({ isActive }) => `flex items-center gap-x-2 text-gray-400 p-1.5 xl:p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-dark-200 hover:text-primary-300 transition-all duration-300 text-sm xl:text-base ${isActive && "text-primary-300 bg-primary-100 dark:bg-dark-200"}`}>
                            <FaRegCircleUser className='text-lg xl:text-xl' />
                            اطلاعات حساب
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => `flex items-center gap-x-2 text-gray-400 p-1.5 xl:p-2 rounded-lg hover:bg-primary-100 dark:hover:bg-dark-200 hover:text-primary-300 transition-all duration-300 text-sm xl:text-base ${isActive && "text-primary-300 bg-primary-100 dark:bg-dark-200"}`}>
                            <MdLogout className='text-lg xl:text-xl' />
                            خروج
                        </NavLink>
                    </li>
                </ul>
            </aside >

        </>
    )
}

export default AccountSidebar