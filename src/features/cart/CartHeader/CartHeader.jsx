import React from 'react'
import { BiTrash } from "react-icons/bi";

const CartHeader = ({ totalItemsCount }) => {
    return (
        <div className='flex items-center justify-between mb-6'>
            <div className='text-gray-400 dart:text-gray-400 text-sm md:text-base lg:text-lg'>
                <span>سبد خرید</span>
                {" "}
                <span className=''>({totalItemsCount} کالا)</span>
            </div>
            <button className='flex items-center gap-1 text-error cursor-pointer'>
                <span className='text-xs md:text-sm'>حذف همه</span>
                <BiTrash className='md:text-xl' />
            </button>
        </div>
    )
}

export default CartHeader