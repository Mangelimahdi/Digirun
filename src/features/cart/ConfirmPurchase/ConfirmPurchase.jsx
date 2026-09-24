import React from 'react'
import { RiShoppingBasketLine } from "react-icons/ri";
import { getProductPrice } from '../../../utils/getProductPrice';

const ConfirmPurchase = ({ cartDetails }) => {
    const { totalPrice, totalDiscount } = cartDetails.reduce((acc, item) => {
        const { originalPrice, discountAmount } = getProductPrice(
            item.product?.price,
            item.product?.discount
        );
        acc.totalPrice += originalPrice * item.count;
        acc.totalDiscount += discountAmount * item.count;
        return acc
    }, { totalPrice: 0, totalDiscount: 0})

    const finalPrice = totalPrice - totalDiscount;

    return (
        <div className='flex flex-col  gap-y-5 bg-white dark:bg-dark-100 shadow-100 rounded-lg p-4'>
            <div className='flex items-center justify-between text-sm text-gray-400 dark:text-gray-500'>
                <span>جمع سبد خرید</span>
                <span>{totalPrice.toLocaleString()} تومان</span>
            </div>
            <div className='flex items-center justify-between text-error text-sm'>
                <span>تخفیف</span>
                <span>{totalDiscount.toLocaleString("fa-IR")}تومان</span>
            </div>
            <span className='block border border-dashed border-gray-500 w-full'></span>
            <div className='flex items-center justify-between text-gray-400 dark:text-gray-500 text-sm mb-6'>
                <span>مبلغ نهایی</span>
                <span>{finalPrice.toLocaleString("fa-IR")}تومان</span>
            </div>
            <button className='flex items-center justify-center py-2 rounded-lg text-white gap-1 bg-primary-300 cursor-pointer hover:bg-primary-400/80 transition-colors duration-300 text-sm'>
                تایید و تکمیل سفارش
                <RiShoppingBasketLine className='text-xl' />
            </button>
        </div>
    )
}

export default ConfirmPurchase