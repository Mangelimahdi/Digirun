import React from 'react'
import CartProductImage from '../../features/cart/CartProductImage/CartProductImage';
import { HiOutlineTruck } from "react-icons/hi2";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { TfiAngleLeft } from "react-icons/tfi";
import ProductCount from '../../features/cart/ProductCount/ProductCount';
import CartHeader from '../../features/cart/CartHeader/CartHeader';
import { BiTrash } from 'react-icons/bi';
import ConfirmPurchase from '../../features/cart/ConfirmPurchase/ConfirmPurchase';
import useCart from '../../hooks/useCart';
import products from '../../data/products';

const Cart = () => {
    const {
        cartItems,
        changeItemCount,
        removeFromCart,
        incrementCount,
        decrementCount,
        totalItemsCount,
    } = useCart();


    const cartDetails = cartItems.map((item) => ({
        ...item,
        product: products.find(product => item.id === product.id)
    }))

    return (
        <div className='mb-4 lg:mb-22 flex flex-col lg:flex-row items-start gap-y-4 lg:gap-x-8'>
            <div className='w-full lg:w-3/4 bg-white dark:bg-dark-100 shadow-100 rounded-lg py-2 px-3 md:py-4 md:px-6'>
                <CartHeader totalItemsCount={totalItemsCount} />
                {cartDetails.length > 0 ? (
                    cartDetails.map(({ id, count, color, product }, index) => (
                        <div key={index} className='flex  flex-col gap-2 border-b border-gray-200 dark:border-gray-400'>
                            <div className='py-2'>
                                <div className='flex flex-col sm:flex-row items-start gap-x-6'>
                                    <div className='w-full sm:w-1/2 lg:w-1/5'>
                                        <CartProductImage />
                                    </div>
                                    <div className='w-full flex flex-col gap-y-5 max-h-max lg:w-4/5'>
                                        <h2 className='text-sm lg:text-lg text-gray-400 dark:text-gray-500'>{product.title}</h2>
                                        <div className="flex items-start gap-2 text-xs md:text-sm text-gray-300 dark:text-gray-500">
                                            <span style={{ backgroundColor: color?.value }} className="block shadow-100  size-3.5 md:size-4.5 lg:size-5 rounded-full">
                                            </span>
                                            {color?.name}
                                        </div>
                                        <div className='text-gray-300 dark:text-gray-500 flex items-center gap-1 lg:gap-2 text-xs lg:text-sm'>
                                            <HiOutlineShieldCheck className='size-5' />
                                            گارانتی 24 ماهه
                                        </div>
                                        <div className='text-gray-300 dark:text-gray-500 flex items-center gap-1 lg:gap-2 text-xs lg:text-sm'>
                                            <HiOutlineTruck className='size-5' />
                                            ارسال 3 روز کاری
                                        </div>
                                    </div>
                                </div>
                                <div className='grid grid-cols-2 sm:grid-cols-3 gap-2 items-center justify-between mt-4 '>
                                    <div className='text-gray-400 dark:text-gray-500 text-sm md:text-base'>
                                        {product ? `${(product?.price * count).toLocaleString("fa-IR")}` : ""}
                                        تومان
                                    </div>
                                    <ProductCount
                                        count={count}
                                        id={id}
                                        color={color}
                                        changeItemCount={changeItemCount}
                                        removeFromCart={removeFromCart}
                                        incrementCount={incrementCount}
                                        decrementCount={decrementCount} />
                                    <span className='flex items-center sm:justify-end gap-1 text-primary-300 text-xs sm:text-sm md:text-base'>
                                        انتقال به خرید بعدی
                                        <TfiAngleLeft />
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>

                    </p>
                )

                }
            </div>
            <div className='w-full lg:w-1/4'>
                <ConfirmPurchase cartDetails={cartDetails} />
            </div>
        </div>
    )
}

export default Cart