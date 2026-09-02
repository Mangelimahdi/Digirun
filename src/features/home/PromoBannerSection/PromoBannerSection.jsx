import React from 'react'
import PromoCard from './components/PromoCard'

const PromoBannerSection = () => {
    const promoData = [
        { id: 1, title: "لپتاپ گیمینگ ام اس آی", image: '/images/banner/1.webp' },
        { id: 2, title: "لپتاپ اقتصادی", image: '/images/banner/2.webp' },
        { id: 3, title: "لپتاپ گیمینگ TUF", image: '/images/banner/3.webp' },
    ]

    return (
        <div className='flex flex-wrap lg:flex-nowrap justify-center gap-4 md:gap-8 mb-6 md:mb-8 lg:mb-22'>
            {promoData.map((product) => (
                <div key={product.id} className={`"w-full sm:w-[calc(50%-1rem)] md:w-[calc(50%-2rem)] lg:w-[33%] `}>
                    <PromoCard {...product} />
                </div>
            ))
            }
        </div >
    )
}

export default PromoBannerSection