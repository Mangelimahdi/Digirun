import React from 'react'

const PhoneInput = ({ phone, onChange }) => {
    return (
        <>
            <div className='bg-primary-100 dark:bg-dark-200 h-10 focus-within:shadow-100 shadow-primary-300 flex items-center relative rounded-xl overflow-hidden mb-4 *:transition-colors *Lduration-300'>
                <input
                    value={phone}
                    onChange={onChange}
                    type="text"
                    className='w-full h-full px-2 outline-0 bg-transparent text-xs sm:text-sm text-gray-400 placeholder-gray-300' placeholder='شماره موبایل ' />
            </div>
        </>
    )
}

export default PhoneInput