import React from 'react'
import SectionHeader from '../../../components/common/SectionHeader'
import { FiSmartphone } from "react-icons/fi";
import products from '../../../data/products';
import ProductCard from '../../../components/common/ProductCard/ProductCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

const RelatedProducts = ({ relatedProductsIds }) => {
    const filtredProducts = products.filter((prodcut) => relatedProductsIds.includes(prodcut.id));

    return (
        <div className='mb-4 lg:mb-22'>
            <SectionHeader
                prevButtonId="prev-related-product"
                nextButtonId="next-related-product"
                showButtonViewAll
                showNavigation
                icon={FiSmartphone}
                highlight="مشابه"
                title="محصولات" />
            <Swiper
                spaceBetween={20}
                modules={[Navigation]}
                navigation={{
                    prevEl: "#prev-related-product",
                    nextEl: "#next-related-product"
                }}
                breakpoints={{
                    300: {
                        slidesPerView: 1,
                    },
                    400: {
                        slidesPerView: 2,
                    },
                    670: {
                        slidesPerView: 3,
                    },
                    1024: {
                        slidesPerView: 4
                    }
                }}
                className='py-1!'>
                {filtredProducts.map((product) => (
                    <SwiperSlide key={product.id}>
                        <ProductCard {...product} variant="offer" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div >
    )
}

export default RelatedProducts