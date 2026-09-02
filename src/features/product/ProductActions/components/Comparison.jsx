import React from 'react'
import { BsArrowDownUp } from 'react-icons/bs'
import Tooltip from '../../../../components/common/Tooltip/Tooltip'

const Comparison = () => {
    return (
        <Tooltip text="مقایسه">
            <button className='rounded-full border border-gray-400 p-1.5 text-gray-400 dark:text-gray-500 cursor-pointer hover:bg-gray-200/30 dark:hover:bg-gray-300/30 transition-colors duration-150'>
                <BsArrowDownUp className='text-lg' />
            </button>
        </Tooltip>
    )
}

export default Comparison