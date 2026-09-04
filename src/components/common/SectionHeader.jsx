import React from 'react'
import NavigationButtons from './NavigationButtons'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router'
import clsx from 'clsx'

const SectionHeader = ({
    prevButtonId,
    nextButtonId,
    icon: Icon,
    title,
    highlight,
    className,
    showNavigation = true,
    showButtonViewAll = true,
}) => {
    return (
        <div className={clsx("flex items-center justify-between relative mb-2 lg:mb-4",
            className)}>
            <h1 className='flex items-center gap-1 text-sm lg:text-2xl lg:gap-2 text-gray-500 dark:text-gray-500'>
                <Icon className="text-xl" />
                {title}
                <span className='text-primary-300'>
                    {highlight}
                </span>
            </h1>
            <div className='flex items-center gap-1.5 lg:gap-3'>
                {
                    showNavigation && <NavigationButtons prevButtonId={prevButtonId} nextButtonId={nextButtonId} className="*:rounded-sm *:p-1.5 md:*:p-1.5 dark:*:bg-dark-100 *:text-gray-300 *:shadow-200 flex items-center gap-1 md:gap-2" />
                }
                {
                    showButtonViewAll && (
                        <Link to='/' className='group bg-primary-300 text-white flex items-center cursor-pointer px-2 h-7 sm:h-8 md:px-3 lg:h-9 rounded-lg gap-1 md:gap-2 text-xs sm:text-sm'>
                            مشاهده همه
                            <FaArrowLeft className='bg-[#3A82F6] rounded-full text-base size-5 md:size-5 lg:size-6 p-1 md:group-hover:-translate-x-1 transition-transform duration-300' />
                        </Link>
                    )
                }
            </div>
        </div>
    )
}

export default SectionHeader