import clsx from 'clsx';
import React, { useEffect, useRef, useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { FaPlus } from "react-icons/fa6";

const EditableField = ({ value, label, children, onChange, placeholder }) => {
  const [isEditing, setIsEditing] = useState(false);
  const inputRef = useRef();

  useEffect(() => {
    if (!isEditing) return;

    if (inputRef.current?.openCalendar) {
      inputRef.current.openCalendar();
    } else {
      inputRef.current?.focus();
    }
  }, [isEditing])

  const handleCloseEdit = () => {
    setIsEditing(false)
  }

  const handleOpenEdit = () => {
    setIsEditing(true)
  }

  const child = React.cloneElement(children, {
    ref: inputRef,
    value,

    onChange: (value) => {
      onChange?.(value)
    },

    onBlur: handleCloseEdit,
    onClose: handleCloseEdit
  })

  return (
    <div className='flex flex-col'>
      <label className='text-gray-400 mb-2 dark:text-gray-500 md:mb-4 block text-xs md:text-sm'>{label}:</label>
      <div className='relative flex justify-between items-center bg-primary-100 h-10 dark:bg-dark-200 px-4 rounded-lg '>
        {
          isEditing ? (
            child
          ) :
            (
              <p className={clsx("text-xs md:text-sm",
                isEditing ? "text-gray-400 dark:text-gray-400" : "text-gray-300 dark:text-gray-300"
              )}>
                {value || placeholder}
              </p>
            )}
        {
          !isEditing && (
            <FaRegEdit className="md:text-xl text-primary-300 cursor-pointer" onClick={handleOpenEdit} />
          )
        }
      </div>
    </div>
  )
}

export default EditableField;