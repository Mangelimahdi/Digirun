import React from 'react'
import AccountSectionHeader from '../components/AccountSectionHeader'
import { SiGooglemaps } from "react-icons/si";
import { FiMapPin } from "react-icons/fi";
import { FaPlus } from "react-icons/fa";

const Addresses = () => {
    return (
        <div className='bg-white shadow-100 dark:bg-dark-100 mb-8 rounded-lg p-4 md:p-8'>
            <div className='flex items-center justify-between mb-3 md:mb-7'>
                <AccountSectionHeader
                    icon={<SiGooglemaps className='size-5 md:size-7 text-[#E40B0D]' />}
                    title='ادرس های من'
                />
                <button className='flex items-center gap-1 cursor-pointer text-primary-300 text-sm'>
                    <FaPlus className='size-3'/>
                    ادرس جدید
                </button>
            </div>
            <div className='flex flex-col gap-y-4 border border-primary-400 dark:border-primary-400 p-4 rounded-lg text-sm text-gray-400 dark:text-gray-500'>
                <h2 className='flex items-center gap-1 text-primary-300'>
                    <FiMapPin className='' />
                    نام ادرس
                </h2>
                <span>استان آذربایجان شرقی، تبریز، خیابان تختی، کوچه فرهاد، پلاک 74</span>
                <span>
                    کد پستی: 1111111111
                </span>
                <span>
                    گیرنده: مهدی منگلی
                </span>
                <span>
                    شماره تماس:0900000008
                </span>
            </div>
        </div>
    )
}

export default Addresses