import React from 'react'
import AccountSectionHeader from '../components/AccountSectionHeader'


const Messages = () => {
    return (
        <div className='bg-white shadow-100 dark:bg-dark-100 mb-8 rounded-lg p-4 md:p-8'>
            <AccountSectionHeader
                title="پیام های من"
            />
            <div className='flex flex-col gap-y-3 mt-4 md:mt-6 md:gap-y-6'>
                <div className='border border-gray-300 p-6 rounded-sm'>
                    <h2 className='text-sm md:text-base text-gray-400 md:mb-4'>
                        مهدی منگلی عزیز سفارش شما با شماره پیگیری RY987654321IR ارسال شد.
                    </h2>
                    <div className='flex items-center gap-x-3 text-gray-400 text-sm md:text-base'>
                        <span>
                            1405/04/22
                        </span>
                        <span>
                            |
                        </span>
                        <span>
                            12:40
                        </span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Messages