import React from 'react'
import AccordionItem from '../../../../components/common/Accordion/AccordionItem'
import useToggle from '../../../../hooks/useToggle';
import categories  from '../../../../data/categories';
import { FaAngleLeft, FaCheck } from "react-icons/fa6";
import clsx from 'clsx';

const CategoryFilter = () => {
    const { state: isOpen, toggle } = useToggle(false);

    const trigger = (isOpen) => (
        <>
            <span className='text-gray-400 dark:text-gray-400'>دسته بندی ها</span>
            <FaAngleLeft className={clsx("transition-transform duration-300",
                isOpen ? '-rotate-90' : "rotate-0"
            )} />
        </>
    )

    const content = (
        <>
            <div className='flex items-center'>
                <label className='relative flex cursor-pointer items-center rounded-full p-3' htmlFor="category-all">
                    <input type="checkbox" id="category-all" className='peer realative h-5 w-5 cursor-pointer border border-gray-200 dark:bg-dark-200/70 appearance-none rounded shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-100 before:opacity-0 before:transition-opacity checked:border-primary-300 checked:bg-primary-300 hover:before:opacity-10' />
                    <span className='pointer-events-none opacity-0 peer-checked:opacity-100 absolute top-2/4 z-40 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white transition-all'>
                        <FaCheck />
                    </span>
                </label>
                <label htmlFor="category-all" className='text-gray-400'>همه کالا ها</label>
            </div>
            {categories.map((category) => (
                <div className='flex items-center ' key={category.id}>
                    <label className='relative flex cursor-pointer items-center rounded-full p-3' htmlFor={`category-${category.id}`} key={category.id}>
                        <input type="checkbox" id={`category-${category.id}`} className='peer realative h-5 w-5 cursor-pointer border border-gray-200 dark:bg-dark-200/70 appearance-none rounded shadow hover:shadow-md transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-100 before:opacity-0 before:transition-opacity checked:border-primary-300 checked:bg-primary-300 hover:before:opacity-10' />
                        <span className='pointer-events-none opacity-0 peer-checked:opacity-100 absolute top-2/4 z-40 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white transition-all'>
                            <FaCheck />
                        </span>
                    </label>
                    <label htmlFor={`category-${category.id}`} className='text-gray-400'>{category.title}</label>
                </div>))}
        </>
    );

    return (
        <AccordionItem
            trigger={trigger}
            content={content}
            isOpen={isOpen}
            level={-1}
            onToggle={toggle}
        />
    )
}

export default CategoryFilter