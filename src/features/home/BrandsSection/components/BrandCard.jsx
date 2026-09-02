import React from 'react'
import { Link } from 'react-router'

const BrandCard = ({ image }) => {
    return (
        <Link to="" className='flex items-center h-full overflow-hidden bg-white rounded-xl shadow-100'>
            <img src={image} alt="" className='w-full h-full' />
        </Link>
    )
}

export default BrandCard