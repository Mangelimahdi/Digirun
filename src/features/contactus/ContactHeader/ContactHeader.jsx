import React from 'react'
import { Link } from 'react-router'
const ContactHeader = () => {
    return (
        <div className='mb-4 md:mb-8'>
            <h2 className='text-gray-400 dark:text-gray-500 text-sm xs:text-base md:text-xl mb-4 md:mb-8'>تماس با ما</h2>
            <span className='text-gray-400 dark:text-gray-500 text-xs xs:text-sm md:text-base'>
                لطفا قبل از مطرح کردن هرگونه سوال بخش
                {" "}
                <Link className='text-primary-300'>
                    سوالات متداول
                </Link>
                {" "}
                رامطالعه نمایید
            </span>
        </div>
    )
}

export default ContactHeader