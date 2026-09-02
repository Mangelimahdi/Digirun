import React from 'react'
import { Link } from 'react-router'

const BrandCard = () => {
    return (
        <Link className='p-4 w-full text-xs bg-white shadow-sm dark:bg-dark-100 flex rounded-2xl flex-col  items-center text-gray-400 dark:text-white' to="">
            <img src="/images/brands/7.png" className='w-full' alt="" />
            <span>Valeo</span>
        </Link>
    )
}

export default BrandCard