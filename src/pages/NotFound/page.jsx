import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router'

const NotFound = () => {
    return (
        <div className='flex items-center justify-center flex-col mb-10 md:mb-22'>
            <div className='max-w-5xl mb-4 md:mb-8'>
                <img src="/images/404.png" className='w-full  h-full' alt="404" />
            </div>
            <Link to="/" className='flex items-center gap-1 text-primary-300 text-sm md:text-lg'>
                بازگشت به صفحه اصلی
                <FaAngleLeft />
            </Link>
        </div>
    )
}

export default NotFound