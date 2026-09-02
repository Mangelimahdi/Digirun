import React from 'react'

const   ProductSpecifications = ({ features }) => {
   
    return (
        <div className='flex items-center justify-between w-full md:w-1/3'>
            <ul>
                {features.map((feature) => (
                    <li className='text-gray-300 dark:text-gray-400 py-2 text-sm'>{feature.name}:</li>
                ))}
            </ul>
            <ul>
                {features.map((feature) => (
                    <li className='text-gray-400 dark:text-gray-500 py-2 text-sm'>{feature.value}</li>
                ))}
            </ul>

        </div>
    )
}

export default ProductSpecifications