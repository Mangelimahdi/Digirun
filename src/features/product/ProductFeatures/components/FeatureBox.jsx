import React from 'react'

const FeatureBox = ({ label, title }) => {
    return (
        <div className='bg-gray-200 dark:bg-dark-200 rounded-lg py-1 px-2'>
            <span className='block text-gray-300 dark:text-gray-400 text-sm mb-2'>
                {label}
            </span>
            <h2 className='text-sm text-gray-400 dark:text-gray-500'>
                {title}
            </h2>
        </div>
    )
}

export default FeatureBox;