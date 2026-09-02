import React from 'react'

const FooterBadges = () => {
    return (
        <div className='flex items-start justify-end md:gap-4 flex-1'>
            <span className='flex h-16 w-16 lg:w-20 lg:h-20'>
                <img src="/images/footer/1.webp" className='w-full h-full' />
            </span>
            <span className='flex h-16 w-16 lg:w-20 lg:h-20'>
                <img src="/images/footer/2.webp" className='w-full h-full' />
            </span>
        </div>
    )
}

export default FooterBadges