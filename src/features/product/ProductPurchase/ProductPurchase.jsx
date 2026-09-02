import React, { useState } from 'react'
import useLocalStorage from '../../../hooks/useLocalStorage';
import useCount from '../../../hooks/useCount';

const ProductPurchase = ({ productId, price }) => {
    const {
        count,
        handlerIncrement,
        handlerDecrement,
        handleCountChange,
    } = useCount();
    const { state, setValue } = useLocalStorage('cart', []);

    const AddToCart = (prodcutId) => {
        setValue((prev) => {
            return [...prev, { prodcutId, count }]
        })
    }

    return (
        <div className='bg-white text-center dark:bg-dark-100 shadow-100 py-4  px-3 lg:px-4 xl:px-6 rounded-lg transition-colors duration-300 mb-4'>
            <div className='mb-4.5 text-gray-400'>
                قیمت :
                {price.toLocaleString()}
                تومان
            </div>
            <div className='flex items-center justify-center gap-x-4 mb-4.5'>
                <button
                    className='text-3xl text-error cursor-pointer'
                    onClick={handlerDecrement}>-</button>
                <input
                    type="text"
                    inputMode='numeric'
                    pattern='[0-9]*'
                    className='w-6.5 h-6.5 outline-none border px-1 border-gray-300 dark:border-gray-500 dark:text-gray-400 rounded-sm text-center'
                    value={count}
                    onChange={(event) => handleCountChange(event.target.value)}
                />
                <button
                    className='text-2xl text-success cursor-pointer'
                    onClick={handlerIncrement}>+</button>
            </div>
            <div className='flex items-center justify-between p-2 xl:px-4 bg-gray-100 dark:bg-dark-200 rounded-lg text-sm mb-6 text-gray-400 '>
                <span>مجموع خرید:</span>
                <span> {(price * count).toLocaleString()}
                    {" "}
                    تومان
                </span>
            </div>
            <button className='text-base rounded-2xl text-white bg-primary-300 px-4 py-2 cursor-pointer transition-colors duration-200 hover:bg-primary-300/80'
                onClick={() => AddToCart(productId)}
            >افزودن به سبد خرید</button>
        </div>
    )
}

export default ProductPurchase