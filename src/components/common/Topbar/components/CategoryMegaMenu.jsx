import React, { useState } from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { Link } from 'react-router'
import useToggle from '../../../../hooks/useToggle';
import categories from '../../../../data/categories';

const CategoryMegaMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null)

    const handleClose = () => setIsOpen(false)

    const handleOpen = () => {
        setIsOpen(true)

        if (categories.length && !activeCategory) {
            setActiveCategory(categories[0])
        }
    }

    return (
        <div className='relative! group'
            onMouseEnter={handleOpen}
            onMouseLeave={handleClose}
        >
            <button className='flex items-center gap-1 cursor-pointer after:absolute after:w-0 after:h-0.5 after:rounded-full after:right-1/2 after:translate-x-1/2 after:-bottom-1.5 after:bg-primary-300 hover:after:w-full hover:after:h-0.5 after:transition-[width] after:duration-300'>
                دسته بندی ها
                <FaAngleDown className='group-hover:rotate-180 transition-transform duration-300' />
            </button>

            {
                isOpen && categories.length > 0 && (
                    <div className='absolute! opacity-0 invisible group-hover:visible group-hover:opacity-100 top-7! px-4 py-2 right-0! bg-white dark:bg-dark-200 shadow-100 rounded-lg z-50 w-screen! max-w-5xl'>
                        <div className='flex items-stretch max-h-[70vh]'>
                            <ul className='py-2 px-2 rounded-lg bg-gray-100 dark:bg-dark-100'>
                                {
                                    categories.map((category) => (
                                        <li key={category.id}
                                            className='text-sm text-gray-400 dark:text-gray-400'
                                            onMouseEnter={() => setActiveCategory(category)}>
                                            <Link to={`category/${category.slug}`} className={`flex! py-3 px-2 rounded-sm transition-colors duration-300 ${activeCategory?.id === category.id ? "bg-primary-300 text-white" : " hover:bg-blue-200"
                                                }`}>
                                                {category.title}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                            <div className='flex-1 p-3'>
                                {
                                    activeCategory?.subCategories?.length > 0 ? (
                                        <div className='grid grid-cols-4 gap-x-6 gap-y-4  items-start'>
                                            {activeCategory.subCategories?.map((sub) => (

                                                <div key={sub.id} className='flex flex-col'>
                                                    <Link to={`category/${activeCategory.slug}/${sub.slug}`}
                                                     className='pb-2 mb-2 border-b-2 border-primary-300 text-gray-500 dark:text-gray-500'>
                                                        {sub?.title}
                                                    </Link>
                                                    <ul>
                                                        {
                                                            sub?.subCategories.map((leaf) => (
                                                                <li key={leaf.id} className='py-2'>
                                                                    <Link to={`category/${activeCategory.slug}/${sub.slug}/${leaf.slug}`}
                                                                        className='text-gray-300 hover:text-gray-400 dark:text-gray-400 dark:hover:text-gray-500 transition-colors duration-200'
                                                                    >
                                                                        {leaf.title}
                                                                    </Link>
                                                                </li>
                                                            ))
                                                        }
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    ) : (
                                        <p className='text-gray-400'>
                                            زیر دسته ای برای این دسته بندی وجود ندارد
                                        </p>
                                    )
                                }
                            </div>
                        </div>
                    </div>
                )
            }

        </div >
    )
}

export default CategoryMegaMenu