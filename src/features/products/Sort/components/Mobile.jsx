import clsx from 'clsx'
import React from 'react'
import { FaTimes } from 'react-icons/fa'
import BackgroundOverlay from '../../../../components/common/BackgroundOverlay'

const Mobile = ({ isOpen, onClose }) => {
    return (
        <>
            <div className={clsx(
                'md:hidden bg-white dark:bg-dark-100 transition-all overflow-y-auto duration-300 rounded-t-2xl p-4 shadow-sm fixed bottom-0 right-0 left-0 w-full z-50',
                isOpen ? "translate-y-0" : 'translate-y-full'
            )}>
                <span className='block h-0.5 w-1/2 mx-auto bg-gray-300 dark:bg-gray-300 rounded-full'></span>
                <button className='flex justify-end w-full text-gray-500 dark:text-gray-400' onClick={onClose}>
                    <FaTimes />
                </button>
                <h1 className='mb-6 text-gray-300 dark:text-gray-400'>مرتب سازی بر اساس</h1>
                <ul className='flex flex-col items-center w-full *:w-full text-center text-sm lg:text-base *:text-gray-300 *:dark:text-gray-400 *:hover:text-primary-400 *:hover:dark:text-primary-300 *:transition-all duration-300 *:cursor-pointer *:py-4 [&>*:not(:last-child)]:border-b-1'>
                    <li>محبوب ترین</li>
                    <li>پر فروش ترین</li>
                    <li>ارزان ترین</li>
                    <li>گران ترین</li>
                    <li>پربازدید ترین</li>
                </ul>
            </div>
            <BackgroundOverlay isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default Mobile