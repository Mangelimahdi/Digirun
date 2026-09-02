import React from 'react'

const Mobile = () => {
    return (
        <div className='flex flex-col items-center gap-y-6 mt-4 md:hidden'>
            <div className='flex items-center shadow-100 p-2 rounded-lg gap-x-3.5 sm:gap-x-5 w-full border border-gray-200 dark:border-gray-300'>
                <div>
                    <img src="/images/products/14.webp" className='w-25 object-cover shrink-0' />
                </div>
                <div className='flex flex-col items-start text-xs sm:text-sm *:text-gray-400 gap-y-3'>
                    <h2>ایفون 14 پرو صفحه‌نمایش 6.1 اینچی</h2>
                    <span>
                        قیمت: 82,000,000 تومان
                    </span>
                    <span>
                        تاریخ: 1405/05/20
                    </span>
                    <span className='text-xs !text-error bg-error/25 p-2 rounded-full'>
                        لغو شده
                    </span>
                </div>
            </div>
            <div className='flex items-center shadow-100 p-2 rounded-lg gap-x-3.5 sm:gap-x-5 w-full border border-gray-200 dark:border-gray-300'>
                <div>
                    <img src="/images/products/14.webp" className='w-25 object-cover shrink-0' alt="" />
                </div>
                <div className='flex flex-col items-start text-xs sm:text-sm *:text-gray-400 gap-y-3'>
                    <h2>ایفون 14 پرو صفحه‌نمایش 6.1 اینچی</h2>
                    <span>
                        قیمت: 82,000,000 تومان
                    </span>
                    <span>
                        تاریخ: 1405/05/20
                    </span>
                    <span className='text-xs !text-success bg-success/25 p-2 rounded-full'>
                        پرداخت شده
                    </span>
                </div>
            </div>
            <div className='flex items-center shadow-100 p-2 rounded-lg gap-x-3.5 sm:gap-x-5 w-full border border-gray-200 dark:border-gray-300'>
                <div>
                    <img src="/images/products/14.webp" className='w-25 object-cover shrink-0' alt="" />
                </div>
                <div className='flex flex-col items-start text-xs sm:text-sm *:text-gray-400 gap-y-3'>
                    <h2>ایفون 14 پرو صفحه‌نمایش 6.1 اینچی</h2>
                    <span>
                        قیمت: 82,000,000 تومان
                    </span>
                    <span>
                        تاریخ: 1405/05/20
                    </span>
                    <span className='text-xs !text-warning bg-warning/25 p-2 rounded-full'>
                        در انتظار پرداخت
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Mobile