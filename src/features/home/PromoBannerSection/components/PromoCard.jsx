import React from 'react'

const PromoCard = ({ image, title }) => {
    return (
        <div className='relative rounded-2xl  overflow-hidden max-h-56'>
            <img src={image} alt={title} className='w-full h-full object-cover' />
            <div className='absolute flex flex-col items-center justify-between w-full h-full top-1/2 -translate-y-1/2 right-1/2 translate-x-1/2 text-center bg-gray-500/20 dark:bg-gray-100/20 py-4'>
                <h2 className='text-white text-lg md:text-xl lg:text-2xl'>{title}</h2>
                <button className='bg-white px-2 py-1 lg:px-4 lg:py-2 rounded-lg text-gray-300 cursor-pointer md:text-lg lg:text-xl'>خرید</button>
            </div>
        </div>
    )
}

export default PromoCard;