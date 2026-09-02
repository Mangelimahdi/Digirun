import { Swiper, SwiperSlide } from 'swiper/react';
import BackgroundOverlay from '../../../../components/common/BackgroundOverlay';
import { IoMdClose } from "react-icons/io";
const ProductImageModal = ({
    isOpen,
    onClose,
    title,
    images,
    selectedImage,
}) => {
    return (
        <>{isOpen &&
            <div className='fixed overflow-hidden z-50! inset-0 rounded-lg m-auto h-[80vh] w-full max-w-2xl bg-white dark:bg-dark-100' onClick={(event) => event.stopPropagation()}>
                <div className='flex items-center justify-between p-5 text-gray-400 dark:text-gray-500'>
                    <span>
                        {title}
                    </span>
                    <button className='cursor-pointer' onClick={onClose}>
                        <IoMdClose />
                    </button>
                </div>
                <div className='mx-auto!'>
                    <Swiper
                        slidesPerView={1}
                        grabCursor
                        initialSlide={selectedImage}
                    >
                        {images.map((image, index) => (
                            <SwiperSlide key={`${image}-${index}`}>
                                <div className='flex! items-center! justify-center!'>
                                    <img src={image} className='w-100 object-cover' />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div >}
            <BackgroundOverlay isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default ProductImageModal