import clsx from 'clsx';
import React from 'react'

const CategoryTabs = ({ activeTab, onChangeTab }) => {

    return (
        <ul className='grid grid-cols-3 text-center bg-white dark:bg-dark-100 border-y-2 border-gray-100 dark:border-dark-200 rounded-t-2xl' >
            <li className={clsx(`px-4 py-2 text-sm text-gray-400 dark:text-white`,
                activeTab === 'products' && "border-b-2 border-primary-300"
            )}>
                <button onClick={() => onChangeTab("products")}>محصولات</button>
            </li>
            <li className={clsx(`px-4 py-2 text-sm text-gray-400 dark:text-white`,
                activeTab === 'brands' && "border-b-2 border-primary-300"
            )}>
                <button onClick={() => onChangeTab("brands")}>برند ها</button>
            </li>
            <li className={clsx(`px-4 py-2 text-sm text-gray-400 dark:text-white`,
                activeTab === 'articles' && "border-b-2 border-primary-300"
            )}>
                <button onClick={() => onChangeTab("articles")}>مقالات</button>
            </li>
        </ul>
    );
}

export default CategoryTabs;