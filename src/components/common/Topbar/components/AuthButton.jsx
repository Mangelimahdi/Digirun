import React from 'react'
import { Link } from 'react-router'

const AuthButton = () => {
    return (
        <Link to="/auth" className='hidden md:flex items-center text-gray-400 px-1.5 md:h-11 text-sm lg:text-base rounded-full border border-gray-200 dark:border-gray-400 transition-colors duration-300 hover:bg-primary-300 hover:text-white'>
            ورود | ثبت نام
        </Link>
    )
}

export default AuthButton