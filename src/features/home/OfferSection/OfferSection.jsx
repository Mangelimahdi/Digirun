import React from 'react'
import ProductCard from '../../../components/common/ProductCard/ProductCard.jsx'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import CountdownTimer from './components/CountDownTimer.jsx'
import NavigationButtons from '../../../components/common/NavigationButtons.jsx'
import products from '../../../data/products.js'

const OfferSection = () => {
    return (
        <div className='bg-primary-300 rounded-4xl px-2 py-3 md:px-8 md:py-6 mb-6 lg:mb-22 relative'>
            <h1 className='text-sm sm:text-lg mb-2 lg:text-4xl text-white font-bold lg:hidden text-center'>پیشنهاد شگفت انگیز</h1>
            <NavigationButtons
                prevButtonId="offer-section-prev"
                nextButtonId="offer-section-next"
                className="*:absolute *:rounded-xl *:text-gray-300 *:top-1/2 *:-translate-y-1/2 *:p-1 lg:*:p-2 hidden lg:block dark:*:bg-dark-200 *:border *:border-gray-200 dark:*:border-gray-400 [&_.swiper-prev]:right-4 [&_.swiper-next]:left-4" />
            <Swiper
                modules={[Navigation]}
                spaceBetween={8}
                slidesPerView={5}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    360: {
                        slidesPerView: 2,
                    },
                    652: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                    1250: {
                        slidesPerView: 5,
                        spaceBetween: 10
                    }
                }}
                navigation={{
                    prevEl: "#offer-section-prev",
                    nextEl: "#offer-section-next"
                }}
            >

                <SwiperSlide className='self-center !hidden lg:!flex justify-center'>
                    <div className='flex flex-col items-center gap-2 lg:gap-8'>
                        <h1 className='text-sm lg:text-2xl xl:text-4xl text-white font-bold text-center'>پیشنهاد شگفت انگیز</h1>
                        <CountdownTimer />
                    </div>
                </SwiperSlide>
                {
                    products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard {...product} variant="rate" />
                        </SwiperSlide>
                    ))

                }
            </Swiper>
            <div className='lg:hidden mt-2'>
                <CountdownTimer />
            </div>
        </div >
    )
}

export default OfferSection