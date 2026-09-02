import React from 'react'
import { MdOutlineFormatListBulleted } from "react-icons/md";

const AccountSidebarToggle = ({ onClick }) => {
    return (
        <button className='flex items-center gap-x-1.5 mb-4 text-white bg-primary-300 xl:hidden py-1.5 px-2 rounded-lg text-sm md:text-base' onClick={onClick}>
            <MdOutlineFormatListBulleted className='text-lg'/>
            منوی کاربری
        </button>
    )
}

export default AccountSidebarToggle