import React from 'react'
import { PiFireSimple } from "react-icons/pi";
import { Grid, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './components/ProductCard';
import NavigationButtons from '../../../components/common/NavigationButtons';
import products from '../../../data/products';

const TrendingProducts = () => {


    return (
        <div className=' flex flex-col bg-white dark:bg-dark-100 shadow rounded-xl p-4 relative mb-6 md:mb-8 lg:mb-22'>
            <h1 className='flex items-center justify-center gap-1.5 text-sm md:text-xl lg:text-2xl text-gray-500 dark:text-gray-400 mb-4 md:mb-8'>
                <PiFireSimple className='text-warning' />
                داغ ترین های چند ساعت گذشته
            </h1>
            <div className='flex justify-center'>
                <NavigationButtons prevButtonId="prev-trend" nextButtonId="next-trend" className="*:absolute dark:*:bg-dark-200 text-gray-400 *:rounded-sm lg:*:rounded-xl shadow *:border *:border-gray-200 dark:*:border-gray-400 *:p-1 lg:*:p-2 block *:top-1/2 *:-translate-y-1/2 [&_.swiper-prev]:right-4 [&_.swiper-next]:left-4" />
                <Swiper
                    modules={[Navigation, Grid]}
                    navigation={{
                        prevEl: "#prev-trend",
                        nextEl: "#next-trend",
                    }}
                    slidesPerView={2}
                    spaceBetween={10}
                    grid={{
                        fill: "row",
                        rows: 2,
                    }}

                    breakpoints={{
                        0: {
                            slidesPerView: 1,

                        },
                        360: {
                            slidesPerView: 1,

                        },
                        575: {
                            slidesPerView: 1,
                            spaceBetween: 24,

                        },
                        1024: {
                            slidesPerView: 2,
                            grid: {
                                fill: "row",
                                rows: 3,
                            }

                        },
                    }}
                >
                    {
                        products.map((product) => (
                            <SwiperSlide>
                                <div className='flex justify-center'>
                                    <ProductCard {...product} />
                                </div>
                            </SwiperSlide>

                        ))
                    }
                </Swiper>
            </div>
        </div >
    )
}

export default TrendingProducts