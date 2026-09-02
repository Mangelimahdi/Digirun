import React from 'react'

const Tooltip = ({ children, text }) => {
    return (
        <div className='group relative flex items-center justify-center'>
            <div className='absolute invisible opacity-0 group-hover:visible
             group-hover:opacity-100 min-w-max -top-9 text-xs
              text-white bg-primary-300 px-2 py-1 rounded-lg whitespace-nowrap
               transition-all duration-150 left-1/2 -translate-x-1/2 z-10'>
                {text}
            </div>
            {children}
        </div>
    )
}

export default Tooltip