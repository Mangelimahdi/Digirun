import React from 'react'
import { BiShoppingBag } from 'react-icons/bi'
import { Link } from 'react-router'
import clsx from 'clsx'
import useCart from '../../../../hooks/useCart'

const CartButton = () => {
    const {totalItemsCount}=useCart();
    
    return (
        <Link to={'/cart'} className={clsx('p-2 border border-gray-200 dark:border-gray-400 rounded-full cursor-pointer hidden md:block relative transition-all duration-300',
            totalItemsCount> 0 && "bg-primary-300 "
        )}>
            {totalItemsCount > 0 && <span className='badge absolute flex items-center justify-center text-xs top-0 right-0 bg-error w-4 h-4 rounded-full text-white'>{totalItemsCount}</span>}
            <BiShoppingBag className={clsx('md:text-xl lg:text-3xl text-xs text-gray-300 dark:text-gray-400',
                totalItemsCount > 0 && "text-white!"
            )} />
        </Link>
    )
}

export default CartButton