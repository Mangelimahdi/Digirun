import React from 'react'

import Tooltip from '../../../../components/common/Tooltip/Tooltip'
import { HiOutlineShare } from "react-icons/hi2";

const Share = () => {
    return (
        <Tooltip text="اشتراک گذاری">
            <button className='rounded-full border border-gray-400 p-1.5 text-gray-400 dark:text-gray-500 cursor-pointer hover:bg-gray-200/30 dark:hover:bg-gray-300/30 transition-all duration-300'>
                <HiOutlineShare className='text-lg'/>
            </button>
        </Tooltip>
    )
}

export default Share