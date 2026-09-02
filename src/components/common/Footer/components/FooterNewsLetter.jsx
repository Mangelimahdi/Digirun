import React from 'react'

const FooterNewsLetter = () => {
    return (
        <div className='relative w-full bg-gray-600/20 rounded-lg flex items-center p-3 max-w-82 lg:w-82 text-gray-300 dark:text-gray-400 text-xs md:text-sm'>
            <input type="text" className='w-full h-full outline-0' placeholder='عضویت در خبرنامه' />
            <button className='bg-primary-300 dark:bg-primary-300/95 absolute left-2 text-sm lg:text-base rounded-lg py-1 px-1.5 lg:px-3 cursor-pointer text-white'>ثبت</button>
        </div>
    )
}

export default FooterNewsLetter