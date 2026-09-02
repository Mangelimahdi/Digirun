import React from 'react'

const OtpInput = ({ value, onChange, index, ref, onKeyDown, onPaste },) => {

    return (
        <div className='size-12 bg-primary-100 dark:bg-dark-200 mb-4 shadow focus-within:shadow-primary-300 rounded-lg overflow-hidden transition-all duration-300'>
            <input
                inputMode='numeric'
                type="text"
                value={value}
                ref={ref}
                onChange={(event) => onChange(index, event.target.value)}
                maxLength={1}
                onKeyDown={(event) => onKeyDown(event, index)}
                onPaste={(event) => onPaste(event)}
                className='size-full outline-0 text-center bg-transparent caret-primary-300 text-gray-400 dark:text-gray-500'
            />
        </div>
    )
}

export default OtpInput