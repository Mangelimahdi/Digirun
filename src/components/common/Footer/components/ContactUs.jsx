import React from 'react'

const ContactUs = () => {
    return (
        <div className='flex-[1.5] w-full sm:w-auto'>
            <h2 className='text-white text-center sm:text-start text-lg  lg:text-xl mb-4 lg:mb-10.5'>
                تماس با ما
            </h2>
            <ul className='flex flex-col  gap-3 md:gap-4 *:text-sm md:*:text-base'>
                <li className='flex items-center justify-between text-gray-300 dark:text-gray-400'>
                    <span>شماره تماس:</span>
                    <span>034-34111111</span>
                </li>
                <li className='flex items-center justify-between text-gray-300 dark:text-gray-400'>
                    <span>ایمیل:</span>
                    <span>digirun@gmail.com</span>
                </li>
                <li className='flex items-center justify-between gap-2 text-gray-300 dark:text-gray-400'>
                    <span>ادرس:</span>
                    <span>بلوار جمهوری، شاهدیه، شاهدیه1</span>
                </li>
            </ul>
        </div>
    )
}

export default ContactUs