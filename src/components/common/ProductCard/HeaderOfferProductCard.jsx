import React from 'react'
import { BsArrowDownUp } from 'react-icons/bs'
import useFavorites from '../../../hooks/useFavorites'
import { FaHeart, FaRegHeart } from "react-icons/fa";

const HeaderOfferProductCard = ({ productId, discount }) => {
    const {toggleFavorite, isFavorite} = useFavorites(productId);
    const favorite = isFavorite();

    return (
        <div className='flex items-center justify-between'>
            <div className='flex items-center gap-1 *:cursor-pointer *:text-gray-300 dark:*:text-gray-400'>
                <button className='border border-gray-300 rounded-full p-0.5'>
                    <BsArrowDownUp className='text-sm lg:text-xl' />
                </button>
                <button onClick={toggleFavorite}>
                    {favorite === true
                        ? (<FaHeart className='text-xl lg:text-2xl text-error' />)
                        : (<FaRegHeart className='text-xl lg:text-2xl' />)}
                </button>
            </div>
            <div className='flex items-start gap-2'>
                <span className='text-primary-300 text-xs md:text-sm'>
                    <span>{discount.type === "percentage" ? `${discount.value}% ` : "10% "}</span>
                    تخفیف
                </span>
                <span className='w-0.5 h-3 md:h-4 rounded-full block bg-primary-300'></span>
            </div>
        </div>
    )
}

export default HeaderOfferProductCard;  