import React from 'react'
import { FaAngleLeft } from 'react-icons/fa'
import { Link } from 'react-router'

const Breadcrumb = ({ breadcrumbs }) => {

  return (
    <ul className='flex items-center gap-1 md:gap-2 mb-4'>
      {breadcrumbs.map((breadcrumb, index) => (
        <>
          {
            breadcrumb.path ? (
              <li>
                <Link to={breadcrumb.path} className='flex items-center gap-1 text-gray-400 text-sm'>
                  {breadcrumb.icon && <breadcrumb.icon  className="text-lg md:text-xl"/>}
                  {breadcrumb.title}
                </Link>
              </li>
            ) : (
              <li className='flex items-center gap-1 text-gray-400 text-sm'>
                {breadcrumb.icon && <breadcrumb.icon />}
                {breadcrumb.title}
              </li>
            )
          }
          {
            index < breadcrumbs.length - 1 && (
              <span className='text-gray-400 text-sm md:text-lg'>
                <FaAngleLeft />
              </span>
            )
          }
        </>
      ))
      }
    </ul>
  )
}

export default Breadcrumb