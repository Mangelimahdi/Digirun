import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Searchinput = () => {
    return (
        <div className='relative flex items-center border border-gray-200 rounded-full md:py-0.5 md:px-0.5 w-xs sm:w-1/2 lg:w-1/3 dark:bg-dark-100'>
            <button className='p-2 bg-primary-300 rounded-full cursor-pointer transition-all duration-300 hover:bg-primary-400 '>
                <BiSearch className='text-white sm:text-xl lg:text-3xl text-lg' />
            </button>
            <input type="text" className='w-full self-stretch px-3 outline-0 text-gray-300 dark:text-gray-400 dark:placeholder:text-gray-400 text-sm ' placeholder='جستجو...' />
        </div>
    )
}

export default Searchinput