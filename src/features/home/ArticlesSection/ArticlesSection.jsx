import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import ArticleCard from './components/ArticleCard'
import { IoIosStarOutline } from "react-icons/io";
import SectionHeader from '../../../components/common/SectionHeader'

const ArticlesSection = () => {
    const article = [
        { id: 1, title: "بهترین لپتاپ های گیمینگ بازار ایران", image: "/images/articles/1.webp" },
        { id: 2, title: "بهترین لپتاپ های بازار ایران", image: "/images/articles/1.webp" },
        { id: 3, title: "بهترین موبایل های بازار ایران", image: "/images/articles/2.webp" },
        { id: 4, title: "همه چیزدرباره انتخاب درست هدفون و هندزفری", image: "/images/articles/3.webp" },
        { id: 5, title: "همه چیزدرباره انتخاب درست هدفون و هندزفری", image: "/images/articles/1.webp" },
        { id: 6, title: "همه چیزدرباره انتخاب درست هدفون و هندزفری", image: "/images/articles/2.webp" },
    ]

    return (
        <div className=' mb-6 md:mb-8 lg:mb-22'>
            <SectionHeader
                prevButtonId="prev-article"
                nextButtonId="next-article"
                icon={IoIosStarOutline}
                showButtonViewAll={false}
                showNavigation={false}
                highlight="محبوب"
                title="مقالات"
            />
            <Swiper
                slidesPerView={4}
                spaceBetween={2}
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
                    article.map((article) => (
                        <SwiperSlide className='group'>
                            <ArticleCard {...article} />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default ArticlesSection