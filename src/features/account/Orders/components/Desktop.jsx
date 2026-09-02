import React from 'react'

const Desktop = () => {
    return (
        <div className='shadow-100 border hidden md:block border-gray-200 rounded-lg overflow-hidden mt-8'>
            <table className='w-full text-sm table-fixed text-center  '>
                <thead className='bg-gray-100 dark:bg-dark-200 w-full'>
                    <tr className='*:py-3 *:px-6 *:text-gray-400 *:font-normal'>
                        <th>نام محصول</th>
                        <th>تاریخ</th>
                        <th>قیمت</th>
                        <th>وضعیت</th>
                    </tr>
                </thead>
                <tbody className='[&>*:not(:last-child)]:border-b-1 *:border-gray-200 *:dark:border-gray-300 *:transition-all *:duration-300 *:hover:bg-gray-100 *:dark:hover:bg-dark-200/30 *:cursor-pointer'>
                    <tr>
                        <td className=' px-6 py-5 text-sm text-gray-400 dark:text-gray-500'>
                            <div className='flex items-center gap-2 '>
                                <img src="/images/products/14.webp" className='w-15 object-cover shrink-0' alt="" />
                                <span className='truncate'>
                                    ایفون 14 پرو صفحه‌نمایش 6.1 اینچی، حافظه داخلی 256 گیگابایت، رم 6 گیگابایت
                                </span>
                            </div>
                        </td>
                        <td className='px-6 py-5 text-sm  text-gray-300 dark:text-gray-500'>
                            1405/04/18
                        </td>
                        <td className='px-6 py-5 text-sm  text-gray-300 dark:text-gray-500'>
                            60,000,000 تومان
                        </td>
                        <td className='px-6 py-5 text-sm text-error'>
                            <span className='bg-error/30 p-2 rounded-full'>
                                لغو شده
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className=' px-6 py-5 text-sm text-gray-400 dark:text-gray-500'>
                            <div className='flex items-center gap-2'>
                                <img src="/images/products/14.webp" className='w-15 object-cover shrink-0' alt="" />
                                <span className='truncate'>
                                    ایفون 14 پرو صفحه‌نمایش 6.1 اینچی، حافظه داخلی 256 گیگابایت، رم 6 گیگابایت
                                </span>
                            </div>
                        </td>
                        <td className='px-6 py-5 text-sm text-gray-300 dark:text-gray-500'>
                            1405/04/18
                        </td>
                        <td className='px-6 py-5 text-sm text-gray-300 dark:text-gray-500'>
                            60,000,000 تومان
                        </td>
                        <td className='px-6 py-5 text-sm text-success'>
                            <span className='bg-success/30 p-2 rounded-full'>
                                پرداخت شده
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <td className=' px-6 py-5 text-sm text-gray-400 dark:text-gray-500'>
                            <div className='flex items-center gap-2'>
                                <img src="/images/products/14.webp" className='w-15 object-cover shrink-0' alt="" />
                                <span className='truncate'>
                                    ایفون 14 پرو صفحه‌نمایش 6.1 اینچی، حافظه داخلی 256 گیگابایت، رم 6 گیگابایت
                                </span>
                            </div>
                        </td>
                        <td className='px-6 py-5 text-sm  text-gray-300 dark:text-gray-500'>
                            1405/04/18
                        </td>
                        <td className='px-6 py-5 text-sm  text-gray-300  dark:text-gray-500'>
                            60,000,000 تومان
                        </td>
                        <td className='px-6 py-5 text-sm text-warning'>
                            <span className='bg-warning/30  p-2 rounded-full'>
                                در انتظار پرداخت
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Desktop