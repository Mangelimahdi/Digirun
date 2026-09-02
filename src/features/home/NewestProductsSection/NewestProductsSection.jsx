import React from 'react'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductCard from '../../../components/common/ProductCard/ProductCard'
import SectionHeader from '../../../components/common/SectionHeader'
import { PiMegaphone } from 'react-icons/pi'
import products from '../../../data/products'
const NewestProductsSection = () => {
    return (
        <div className='mb-4 md:mb-8 lg:mb-22'>
            <SectionHeader
                title='جدیدترین'
                highlight='محصولات'
                showButtonViewAll
                showNavigation
                icon={PiMegaphone}
                prevButtonId="prev_newest_product"
                nextButtonId="next_newest_product" />

            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: "#prev_newest_product",
                    nextEl: "#next_newest_product",
                }}
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
                slidesPerView={5}
                spaceBetween={10}
                className='py-4!'
            >
                {
                    products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <ProductCard {...product} variant="rate" />
                        </SwiperSlide>
                    ))
                }
            </Swiper>

        </div>
    )
}

export default NewestProductsSection