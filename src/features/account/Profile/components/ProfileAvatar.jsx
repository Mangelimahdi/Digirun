import React, { useEffect, useId, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'

const ProfileAvatar = ({ image, onChange }) => {
    const [imageUrl, setImageUrl] = useState("");
    const inputId = useId();

    useEffect(() => {
        if (!image || typeof image === 'string') {
            setImageUrl("");
            return
        }

        const url = URL.createObjectURL(image);
        setImageUrl(url);

        return () => URL.revokeObjectURL(url)
    }, [image]);

    const imageSrc = typeof image === 'string' ? image : imageUrl;
    
    return (
        <div className='flex items-center flex-col md:flex-row gap-x-4 mb-4'>
            <div className='size-20 my-4 rounded-sm overflow-hidden'>
                <img src={imageSrc || "/images/avatar/avatar1.webp"} className='size-full object-cover' alt="Profile Avatar" />
            </div>
            <input id={`edit_profile${inputId}`} onChange={onChange} type="file" name='avatar' accept='.png,.jpeg' className='hidden' />
            <div className='flex flex-col gap-y-2 items-center md:items-start' >
                <label htmlFor={`edit_profile${inputId}`} className='flex items-center text-xs sm:text-sm gap-1 py-1 px-2 md:py-1.5 md:px-3.5 cursor-pointer bg-primary-100 dark:bg-dark-200 text-gray-400 dark:text-gray-500 hover:bg-primary-300 hover:text-white transition-colors duration-300 rounded-2xl shadow-100 shadow-primary-100'>
                    ویرایش پروفایل
                    <FaRegEdit className='text-base' />
                </label>
                <p className='text-gray-300 text-xs'>(تصویر باید با فرمت (png. یا jpeg.) باشد)</p>
            </div>
        </div>
    )
}

export default ProfileAvatar