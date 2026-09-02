import React from 'react'
import ArticleCard from '../components/ArticleCard';

const ArticlesTab = () => {
    return (
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 mt-4'>
            {
                [...Array(24)].map((article, index) => (
                    <ArticleCard key={index} />
                ))
            }
        </div>
    )
}

export default ArticlesTab;