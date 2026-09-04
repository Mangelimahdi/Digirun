import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import NavigationButtons from './../../../components/common/NavigationButtons';

const Banner = () => {
    return (
        <div className='relative mb-8 lg:mb-20'>
            {/* <NavigationBanner /> */}
            <NavigationButtons
                prevButtonId="banner-prev"
                nextButtonId="banner-next" className="*:absolute *:rounded-full *:text-gray-300 *:top-1/2 *:-translate-y-1/2 *:p-1 lg:*:p-2 hidden lg:block [&_.swiper-prev]:right-4 [&_.swiper-next]:left-4 dark:*:bg-dark-100" />
            <Swiper
                modules={[Navigation, Autoplay, Pagination]}
                navigation={{
                    prevEl: "#banner-prev",
                    nextEl: "#banner-next",
                }}
                grabCursor
                pagination={{
                    el: "#pagination-banner",
                    clickable: true,
                }}
                loop
                autoplay={{
                    delay: 3000
                }}
                spaceBetween={25}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <div className='rounded-lg overflow-hidden min-h-36 max-h-80 h-36 sm:h-52 md:h-80'>
                        <img src="/images/banner/5.webp" alt="" className='w-full h-full object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-lg overflow-hidden min-h-36 max-h-80 h-36 sm:h-52 md:h-80 bg-linear-to-t  from-primary-100 to-primary-500 '>
                        <img src="/images/banner/6.webp" alt="" className='w-full h-full object-cover' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='rounded-lg overflow-hidden min-h-36 max-h-80 h-36 sm:h-52 md:h-80 bg-linear-to-t  from-primary-100 to-primary-500 '>
                        <img src="/images/banner/7.webp" alt="" className='w-full h-full object-cover' />
                    </div>
                </SwiperSlide>

            </Swiper>
            <span id='pagination-banner' className='swiper-pagination-custom absolute z-10 flex justify-center px-4 py-2 rounded-t-lg right-1/2 translate-x-1/2 !w-fit max-w-30 !gap-1.5 bottom-0! bg-light-100 dark:bg-dark-100'></span>
        </div>
    )
}

export default Banner