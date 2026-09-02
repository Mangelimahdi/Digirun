import React from 'react'

const ToggleFilter = ({ id, label, icon = null}) => {
    return (
        <div className='flex items-center justify-between py-2' dir='ltr'>
            <label htmlFor={`toggle-switch-${id}`} className='relative inline-block w-11 h-6 cursor-pointer'>
                <input id={`toggle-switch-${id}`} type="checkbox" className='peer sr-only' />
                <span className='absolute inset-0 bg-gray-300 rounded-full peer-checked:bg-primary-300 peer-disabled:opacity-50 peer-disabled:pointer-events-none'></span>
                <span className='absolute inset-0 start-0.5 top-1/2 -translate-y-1/2 bg-white rounded-full size-5 transition-transform duration-200 peer-checked:translate-x-full'></span>
            </label>
            <label htmlFor={`toggle-switch-${id}`} className='flex items-center gap-1 text-gray-400 text-base'>
                {icon && icon}
                {label}
            </label>
        </div>
    )
}

export default ToggleFilter