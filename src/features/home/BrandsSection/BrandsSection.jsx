import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SectionHeader from '../../../components/common/SectionHeader'
import { RiVerifiedBadgeLine } from "react-icons/ri";
import { Navigation } from 'swiper/modules';
import BrandCard from './components/BrandCard';
const BrandsSection = () => {
    const brands = [
        { id: 1, image: '/images/brands/1.webp' },
        { id: 2, image: '/images/brands/2.webp' },
        { id: 3, image: '/images/brands/3.webp' },
        { id: 4, image: '/images/brands/4.webp' },
        { id: 5, image: '/images/brands/5.webp' },
        { id: 6, image: '/images/brands/6.webp' },
    ];
    return (
        <div className='mb-4 md:mb-8 lg:mb-22'>
            <SectionHeader
                title='برندهای'
                highlight='محبوب'
                showButtonViewAll
                showNavigation
                icon={RiVerifiedBadgeLine}
                prevButtonId="prev_brands"
                nextButtonId="next_brands"
                className='mb-2'
            />

            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: "#prev_brands",
                    nextEl: "#next_brands"
                }}
                spaceBetween={10}
                slidesPerView={4.3}
                breakpoints={{
                    0: {
                        slidesPerView: 1,
                    },
                    360: {
                        slidesPerView: 2,

                    },
                    575: {
                        slidesPerView: 3,
                        spaceBetween: 24
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 32
                    },
                }}
                className='py-2! lg:py-4!'>
                {
                    brands.map((brand) => (
                        <SwiperSlide key={brand.id} className='min-h-24 max-h-50 h-full py-1'>
                            <BrandCard  {...brand} />
                        </SwiperSlide>
                    ))
                }

            </Swiper>
        </div>

    )
}

export default BrandsSection