import React from 'react'
import { Link } from 'react-router'

const ArticleCard = () => {
    return (
        <Link className='flex w-full relative overflow-hidden rounded-2xl'>
            <img src="/images/articles/2.webp" alt="" className='w-full' />
            <span className='absolute z-40 bottom-4 left-1/2 -translate-x-1/2 p-1 text-xs sm:text-sm rounded-2xl bg-white dark:bg-dark-100/50 text-gray-400 dark:text-white '>دانستنی ها</span>
        </Link>
    )
}

export default ArticleCard