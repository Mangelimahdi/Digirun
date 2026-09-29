import React from 'react'

const ContactForm = () => {
    return (
        <form className='flex flex-col items-center gap-y-4 md:gap-y-5 max-w-2xl mx-auto'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10 w-full'>
                <div className='w-full md:w-1/2'>
                    <input type="text" className='dark:bg-dark-200 w-full h-10 rounded-lg text-xs md:text-sm text-gray-400 dark:text-gray-500 dark:placeholder:text-gray-500 bg-primary-100 px-4 outline-0' placeholder='نام و نام خانوادگی*' />
                </div>
                <div className='w-full md:w-1/2'>
                    <input type="text" className='dark:bg-dark-200 w-full h-10 rounded-lg text-xs md:text-sm text-gray-400 dark:text-gray-500 dark:placeholder:text-gray-500 bg-primary-100 px-4 outline-0' placeholder='ایمیل*' />
                </div>
            </div>
            <textarea className='bg-primary-100 h-30 md:h-60 dark:bg-dark-200 dark:text-gray-500 text-gray-400 dark:placeholder:text-gray-500 text-xs md:text-sm w-full rounded-lg resize-none outline-none p-2 md:p-4' placeholder='متن دیدگاه شما...'/>
            <button className='bg-primary-300 py-2 px-5 rounded-lg w-full max-w-xs text-white transition-colors hover:bg-primary-300/80 cursor-pointer text-sm mb-4'>ارسال پیام</button>
        </form>
    )
}

export default ContactForm