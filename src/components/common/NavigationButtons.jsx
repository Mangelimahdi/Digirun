import React from 'react'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa'

const NavigationButtons = ({ prevButtonId, nextButtonId, className }) => {
    return (
        <div className={`*:cursor-pointer *:z-30 *:text-xs md:text-xl lg:*:text-2xl *:bg-light-100 *:transition-opacity *:duration-300 ${className}`}>
            <button className='swiper-prev' id={prevButtonId}>
                <FaAngleRight />
            </button>
            <button className='swiper-next' id={nextButtonId}>
                <FaAngleLeft />
            </button>
        </div >
    )
}

export default NavigationButtons