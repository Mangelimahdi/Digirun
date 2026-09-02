import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Logo from '../../Logo'

const SidebarHeader = ({ onClose }) => {
  return (
    <div className='flex items-center justify-between border-b-1 border-gray-300 mb-4 pb-2'>
        <Logo />
      <button className='text-gray-300 dark:text-gray-500 cursor-pointer' onClick={onClose}>
        <FaTimes />
      </button>
    </div>
  )
}

export default SidebarHeader