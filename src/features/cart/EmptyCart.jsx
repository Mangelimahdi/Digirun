import React from 'react'

const EmptyCart = () => {
    return (
        <div className='max-w-2xl flex flex-col justify-center items-center mx-auto dark:bg-dark-100 rounded-lg py-4 shadow-200'>
            <img src="/images/empty-cart.png" className='w-full mb-2' alt="" />
            <span className='text-sm md:text-lg text-gray-400 dark:text-gray-500'>
                سبد خرید شما خالی است
            </span>
        </div>
    )
}

export default EmptyCart