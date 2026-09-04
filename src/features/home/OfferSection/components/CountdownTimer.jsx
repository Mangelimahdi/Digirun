import React from 'react'

const CountDownTimer = () => {
    return (
        <div className='flex items-center justify-center gap-2'>
            <div className='bg-white py-1.5 px-2 rounded-sm text-sm lg:text-xl font-bold text-center'>3</div>
            <span className='text-white text-2xl'>:</span>
            <div className='bg-white py-1.5 px-2 rounded-sm text-sm lg:text-xl font-bold text-center'>3</div>
            <span className='!text-white text-2xl'>:</span>
            <div className='bg-white py-1.5 px-2 rounded-sm text-sm lg:text-xl font-bold text-center'>3</div>
        </div>
    )
}

export default CountDownTimer