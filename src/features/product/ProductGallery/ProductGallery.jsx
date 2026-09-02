import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import useToggle from '../../../hooks/useToggle';
import ProductImageModal from './components/ProductImageModal';

const ProductGallery = ({ title, images }) => {
    const { state: isOpen, onOpen, onClose } = useToggle(false);
    const [selectedImage, setSelectedImage] = useState(0);

    const handleOpenModal = (index) => {
        setSelectedImage(index);
        onOpen()
    }

    return (
        <>
            <Swiper
                spaceBetween={10}
                className='mb-5'>
                {images.map((image, index) => (
                    <SwiperSlide key={`${image}-${index}`}>
                        <img src={image} className='w-full object-cover' />
                    </SwiperSlide>
                ))}
            </Swiper>
            <Swiper
                slidesPerView={4}
                spaceBetween={12}
                className='hidden! lg:block!'>
                {images.map((image, index) => (
                    <SwiperSlide key={`${image}-${index}`} className='w-full'>
                        <div className='relative cursor-pointer border border-gray-300 dark:border-gray-400 rounded-sm p-1'
                            onClick={() => handleOpenModal(index)}>
                            <img src={image} alt="" className={`w-full object-cover`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <ProductImageModal
                title={title}
                images={images}
                selectedImage={selectedImage}
                isOpen={isOpen}
                onClose={onClose}
            />
        </>
    )
}

export default ProductGallery