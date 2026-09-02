import clsx from 'clsx'
import React from 'react'

const BackgroundOverlay = ({ isOpen, onClose }) => {
    return (
        <div className={clsx("fixed inset-0 bg-gray-900/10 backdrop-blur-sm opacity-0 invisible z-40 h-full w-full !transition-all !duration-300",
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )} onClick={onClose}>
        </div>
    )
}

export default BackgroundOverlay;