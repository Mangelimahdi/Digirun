import React from 'react'
import Card from './components/Card';
import SectionHeader from '../../../components/common/SectionHeader';
import { BiCategory } from 'react-icons/bi';
import createCategoryMap from '../../../utils/createCategoryMap';
import categories from '../../../data/categories';
import popularCategories from '../../../data/popularCategories';

const PopularCategories = () => {
    const categoryMap = createCategoryMap(categories);

    const popularCategoriesData = popularCategories.map((category) => ({
        ...categoryMap.get(category.categoryId),
        image: category.image
    }))

    return (
        <div className='mb-8 lg:mb-22'>
            <SectionHeader
                icon={BiCategory}
                title="دسته بندی های"
                highlight="محبوب"
                className="mb-4 lg:mb-8"
                showNavigation={false}
                showButtonViewAll={false} />
            <div className='flex items-center justify-evenly flex-wrap gap-4 sm:gap-8 lg:gap-32 lg:mx-16 '>
                {
                    popularCategoriesData?.map((category) => (
                        <Card key={category.id} {...category} />
                    ))
                }
            </div>
        </div>
    )
}

export default PopularCategories