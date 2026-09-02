import React from 'react'
import { BiStar } from 'react-icons/bi'

const HeaderRateProdactCard = ({rating}) => {
    return (
        <div className='flex items-center justify-end' >
            <span className='text-gray-300 dark:text-gray-500 text-sm'>{rating}</span>
            <BiStar className='text-warning text-2xl' />
        </div>
    )
}

export default HeaderRateProdactCard