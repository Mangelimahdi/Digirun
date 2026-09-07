import React from 'react'
import Logo from '../Logo'

const InitialLoader = () => {
    return (
        <div className='fixed inset-0 z-50  dark:bg-dark-200  flex items-center justify-center'>
            <div className='flex flex-col dark:bg-dark-100 rounded-lg px-8 py-5 shadow-200'>
                <Logo />
                <div className='mt-4 flex items-center justify-center gap-3'>
                    <span className='h-3 w-3 rounded-full bg-gray-400 animate-bounce'></span>
                    <span className='h-3 w-3 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.15s]'></span>
                    <span className='h-3 w-3 rounded-full bg-gray-400 animate-bounce [animation-delay:-0.3s]'></span>
                </div>
            </div>
        </div>
    )
}

export default InitialLoader