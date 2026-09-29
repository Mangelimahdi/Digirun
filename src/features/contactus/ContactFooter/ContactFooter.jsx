import React from 'react'
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
const ContactFooter = () => {
    return (
        <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-y-2 max-w-2xl mx-auto'>
            <span className='flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm'>
                <FaMapMarkerAlt />
                بلوار ازادی، خیابان استاد معین، پلاک 43
            </span>
            <span className='flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm'>
                <FiMail /> 
                digirun@gmail.com
            </span>
            <span className='flex items-center gap-2 text-gray-400 dark:text-gray-500 text-sm'>
                <FaPhone /> 
                034-34111111
            </span>
        </div>
    )
}

export default ContactFooter