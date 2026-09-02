import React from 'react'


const FooterProductCard = ({ originalPrice, finalPrice }) => {


// console.log(originalPrice)
    return (
        <div className='flex items-center justify-between md:gap-1 pt-1.5 md:pt-3'>
            <span>
                <span className='flex items-center gap-0.5 md:gap-1 text-gray-300 dark:text-gray-500 line-through text-[10px] md:text-sm'>
                    <span>{originalPrice.toLocaleString("fa-IR")}</span>
                    تومان
                </span>
            </span>
            <span className='flex items-center gap-0.5 md:gap-1 px-0.5 py-1 md:px-1 md:py-1.5 bg-primary-300 rounded-full text-white text-xs md:text-sm'>
                <span>{finalPrice.toLocaleString("fa-IR")}</span>
                تومان
            </span>
        </div>
    )
}

export default FooterProductCard