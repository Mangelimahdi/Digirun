import React from 'react'

const AccountSectionHeader = ({ icon, title }) => {
    return (
        <div className="flex items-center justify-center md:justify-start gap-x-2 lg:gap-x-3 xl:gap-x-4">
            {icon && icon}
            <h2 className='text-sm md:text-base lg:text-2xl text-gray-400 dark:text-gray-500'>{title}</h2>
        </div>
    )
}

export default AccountSectionHeader