import React from 'react'
import FeatureBox from './components/FeatureBox';

const ProductFeatures = ({ features }) => {
    return (
        <>
            <h2 className='text-gray-400 dark:text-gray-500 mb-4 lg:mb-6'>ویژگی ها</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5 lg:gap-4'>
                {features.map((feature,index) => (
                    <FeatureBox key={index} label={feature.name} title={feature.value} />
                ))}
            </div>
        </>
    )
}

export default ProductFeatures