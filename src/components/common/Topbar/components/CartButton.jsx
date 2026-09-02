import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { Link } from 'react-router'

const CartButton = () => {
    return (
        <Link to={'/cart'} className='p-2 bg-primary-300 hover:bg-primary-400 rounded-full cursor-pointer hidden md:block relative transition-all duration-300'>
            <span className='badge absolute flex items-center justify-center text-xs top-0 right-0 bg-error w-4 h-4 rounded-full text-white'>1</span>
            <BiShoppingBag className='md:text-xl lg:text-3xl text-xs text-white' />
        </Link>
    )
}

export default CartButton