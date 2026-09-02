import React from 'react'
import generateServices from '../../../data/productServices';

const ProductServices = () => {
    const services = generateServices();

    return (
        <div className='grid grid-cols-2 lg:flex lg:items-center gap-2 lg:gap-x-2'>
            {services.map((service,index) => (
                <div key={index} className='flex items-center gap-2.5 p-1.5 lg:py-2.5 lg:px-3.5 border border-gray-300 text-gray-300 dark:border-gray-400 dark:text-gray-400 text-sm rounded-lg lg:rounded-2xl'>
                    <service.Icon className='text-2xl' />
                    <span>{service.title}</span>
                </div>
            ))}
        </div>
    )
}

export default ProductServices