import React from 'react'
import BrandCard from '../components/BrandCard'

const BrandsTab = () => {
    return (
        <div className='grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-4'>
            {[...Array(24)].map((brand, index) => (
                <BrandCard key={index}/>
            ))
            }
        </div>
    )
}

export default BrandsTab