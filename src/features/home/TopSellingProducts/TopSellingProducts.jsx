import React, { useState } from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeader from '../../../components/common/SectionHeader'
import { PiMegaphone } from 'react-icons/pi'
import ProductCard from '../../../components/common/ProductCard/ProductCard'
import products from '../../../data/products'

const TopSellingProducts = () => {
    const topSellingProducts = products.filter((product) => product.salesCount > 300);

    return (
        <div className='mb-4 md:mb-8 lg:mb-22'>
            <SectionHeader
                prevButtonId="prev-top-selling"
                nextButtonId="next-top-selling"
                showButtonViewAll
                showNavigation
                icon={PiMegaphone}
                highlight="پرفروش"
                title="محصولات"
            />
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: "#prev-top-selling",
                    nextEl: "#next-top-selling"
                }}
                slidesPerView={4}
                spaceBetween={10}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    360: {
                        slidesPerView: 2,

                    },
                    645: {
                        slidesPerView: 3,
                        spaceBetween: 24
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 32
                    },
                }}
                className='py-2! lg:py-4!'
            >
                {
                    topSellingProducts.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard {...product} variant="offer" hoverEffect='lift' />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default TopSellingProducts