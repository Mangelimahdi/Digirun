import React from 'react'
import { FaMinus, FaPlus } from "react-icons/fa";
const ProductCount = ({ count,
    handlerIncrement,
    handlerDecrement,
    handleCountChange, }) => {
    return (
        <div className='px-2 py-1 lg:w-1/2 lg:mx-auto border bg-gray-100 dark:bg-[#161E2D] border-gray-200 dark:border-gray-400 rounded-lg flex items-center justify-between'>
            <button
                className={`text-lg text-error cursor-pointer ${count === 1 && "opacity-60"}`}
                disabled={count === 1}
                onClick={handlerDecrement}><FaMinus />
            </button>
            <input
                type="text"
                inputMode='numeric'
                pattern='[0-9]*'
                className='w-6.5 h-6.5 outline-none px-1 dark:text-gray-400 rounded-sm text-center'
                value={count}
                onChange={(event) => handleCountChange(event.target.value)} />
            <button
                className='text-base text-success cursor-pointer'

                onClick={handlerIncrement}><FaPlus />
            </button>
        </div>
    )
}

export default ProductCount