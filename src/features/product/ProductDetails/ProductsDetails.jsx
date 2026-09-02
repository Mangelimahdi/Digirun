import React, { useState } from 'react'

import ProductIntroduction from './components/ProductIntroduction';
import ProductSpecifications from './components/ProductSpecifications';
import ProductReviews from './components/ProductReviews';
import clsx from 'clsx';

const ProductsDetails = ({ introducion, features }) => {

    const [activeTab, setActiveTab] = useState("introduction");

    return (
        <div className='bg-white dark:bg-dark-100 shadow-100 px-2.5 py-4 md:py-6 md:px-4 rounded-lg'>
            <ul className='border-b flex items-center text-sm   gap-8 border-gray-300 dark:border-gray-400 pb-4 *:cursor-pointer *:hover:text-primary-300 *:transition-colors *:duration-300'>
                <li
                    className={clsx(activeTab === 'introduction' ? "text-primary-300" : "text-gray-400 dark:text-gray-500")}
                    onClick={() => setActiveTab('introduction')}>
                    معرفی محصول
                </li>
                <li
                    className={clsx(activeTab === 'specification' ? "text-primary-300" : "text-gray-400 dark:text-gray-500")}
                    onClick={() => setActiveTab('specification')}>
                    مشخصات
                </li>
                <li className={clsx(activeTab === 'reviews' ? "text-primary-300" : "text-gray-400 dark:text-gray-500")}
                    onClick={() => setActiveTab('reviews')}>
                    دیدگاه کاربران
                </li>
            </ul>
            <div className='py-4'>
                {
                    activeTab === "introduction" ? (
                        <ProductIntroduction introducion={introducion} />
                    ) : activeTab === "specification" ? (
                        <ProductSpecifications features={features} />
                    ) : (
                        <ProductReviews />
                    )
                }
            </div>
        </div>
    )
}

export default ProductsDetails