import React, { useState } from 'react'
import { BiMinus, BiPlus, BiTrash } from "react-icons/bi";
import { MIN_COUNT } from '../../../utils/count';
import useCart from '../../../hooks/useCart';

const ProductPurchase = ({ productId, price, selectedColor }) => {
    const [count, setCount] = useState(MIN_COUNT);
    const { getCartItem, addToCart, changeItemCount, removeFromCart, incrementCount, decrementCount } = useCart()

    const product = getCartItem(productId, selectedColor);

    const handleAddToCart = () => {
        addToCart(productId, count, selectedColor);
        setCount(MIN_COUNT)
    }

    return (
        <div className='bg-white text-center dark:bg-dark-100 shadow-100 py-4 px-3 lg:px-4 xl:px-6 rounded-lg transition-colors duration-300 mb-4'>
            <div className='mb-4.5 text-gray-400'>
                قیمت :
                {" "}
                {price.toLocaleString()}
                {" "}
                تومان
            </div>
            <div className='flex items-center justify-between p-2 xl:px-4 bg-gray-100 dark:bg-dark-200 rounded-lg text-sm mb-6 text-gray-400 '>
                <span>مجموع خرید:</span>
                <span> {(price * (product?.count ?? count)).toLocaleString()}
                    {" "}
                    تومان
                </span>
            </div>
            {product ? (
                <div className='flex items-center justify-center gap-x-4'>

                    <button
                        type='button'
                        className='text-2xl text-success cursor-pointer'
                        onClick={() => incrementCount(product.id, selectedColor)}><BiPlus /></button>
                    <input
                        type="text"
                        inputMode='numeric'
                        pattern='[0-9]*'
                        className='w-6.5 h-6.5 outline-none border px-1 border-gray-300 dark:border-gray-500 dark:text-gray-400 rounded-sm text-center'
                        value={product.count}
                        onChange={(event) => changeItemCount(product.id, selectedColor, event.target.value)}
                    />
                    {product.count <= 1 ? (
                        <button
                            type='button'
                            onClick={() => removeFromCart(product.id, selectedColor)}
                            className='text-xl text-error cursor-pointer'>
                            <BiTrash />
                        </button>
                    ) : (
                        <button
                            type='button'
                            className='text-xl text-error cursor-pointer'
                            onClick={() => decrementCount(product.id, selectedColor)}><BiMinus /></button>
                    )
                    }
                </div>
            ) : (
                <button className='text-base rounded-2xl text-white bg-primary-300 px-4 py-2 cursor-pointer transition-colors duration-200 hover:bg-primary-300/80'
                    onClick={handleAddToCart}>
                    افزودن به سبد خرید
                </button>
            )
            }

        </div>
    )
}

export default ProductPurchase