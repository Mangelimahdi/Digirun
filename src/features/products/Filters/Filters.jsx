import React from 'react'
import { BiSolidTimer } from "react-icons/bi";
import CategoryFilter from './components/CategoryFilter';
import ToggleFilter from './components/ToggleFilter';
import PriceFilter from './components/PriceFilter';
import { TbUserStar } from "react-icons/tb";
import { BsShopWindow } from "react-icons/bs";
import { FaTimes } from 'react-icons/fa';
import clsx from 'clsx';
import BackgroundOverlay from '../../../components/common/BackgroundOverlay';

const Filters = ({ isOpen, onClose }) => {
    return (
        <>
            <div className={clsx('fixed bottom-0 left-0 overflow-y-auto h-[50vh] right-0 w-full z-50 lg:translate-y-0 transition-all duration-300 lg:sticky lg:h-fit lg:flex flex-col gap-y-6 py-6 px-4 bg-white shadow-sm dark:bg-dark-100 rounded-lg lg:w-1/4',
                isOpen ? "translate-y-0" : "translate-y-full"
            )}>
                <div className='mb-6 lg:hidden'>
                    <span className='block h-0.5 w-1/2 mx-auto bg-gray-300 dark:bg-gray-300 rounded-full'></span>
                    <button className='flex justify-end w-full text-gray-500 dark:text-gray-400' onClick={onClose}>
                        <FaTimes />
                    </button>
                </div>
                <div className='flex items-center justify-between'>
                    <h2 className='dark:text-gray-500 text-lg'>فیلتر ها</h2>
                    <span className='text-sm text-primary-300'>حذف فیلتر ها</span>
                </div>
                <CategoryFilter />
                <PriceFilter />
                <ToggleFilter
                    id={1}
                    label="فقط کالا های موجود"
                />
                <ToggleFilter
                    id={2}
                    icon={<BiSolidTimer className='text-2xl text-primary-300' />}
                    label="ارسال امروز"
                />
                <ToggleFilter
                    id={3}
                    icon={<TbUserStar className='text-2xl text-primary-300' />}
                    label="ارسال فروشنده"
                />
                <ToggleFilter
                    id={4}
                    icon={<BsShopWindow className='text-2xl text-primary-300' />}
                    label="خرید حضوری"
                />
            </div >
            <BackgroundOverlay isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default Filters