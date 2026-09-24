import React from 'react'
import { BiMinus, BiTrash } from 'react-icons/bi';
import { FaMinus, FaPlus } from "react-icons/fa";
const ProductCount = ({
    id,
    color,
    count,
    changeItemCount,
    removeFromCart,
    incrementCount,
    decrementCount, }) => {
    return (
        <div className='px-2 py-1 lg:w-1/2 lg:mx-auto border bg-gray-100 dark:bg-[#161E2D] border-gray-200 dark:border-gray-400 rounded-lg flex items-center justify-between'>
            <button
                className='text-base text-success cursor-pointer'
                onClick={() => incrementCount(id, color)}><FaPlus />
            </button>
            <input
                type="text"
                inputMode='numeric'
                pattern='[0-9]*'
                className='w-6.5 h-6.5 outline-none px-1 dark:text-gray-400 rounded-sm text-center'
                value={count}
                onChange={(event) => changeItemCount(id, color, event.target.value)} />
            {count <= 1 ? (
                <button
                    type='button'
                    onClick={() => removeFromCart(id, color)}
                    className='text-xl text-error cursor-pointer'>
                    <BiTrash />
                </button>
            ) : (
                <button
                    type='button'
                    className='text-xl text-error cursor-pointer'
                    onClick={() => decrementCount(id, color)}><BiMinus /></button>
            )
            }
        </div >
    )
}

export default ProductCount