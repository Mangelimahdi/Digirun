import React from 'react'

const ProductIntroduction = ({ introducion }) => {

    return (
        <div>
            <span className='border-b-2 pb-1.5 border-primary-300 dark:text-gray-500 '>معرفی</span>
            <p className='mt-5 text-sm dark:text-gray-500 leading-7'>
                {introducion}
            </p>
        </div>
    )
}

export default ProductIntroduction