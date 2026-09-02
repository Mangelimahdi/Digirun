import React from 'react'
import ProductCard from '../../../components/common/ProductCard/ProductCard'
import products from '../../../data/products'
import useLocalStorage from '../../../hooks/useLocalStorage'
import { FaRegHeart } from "react-icons/fa";
const Favorites = () => {
    const { state: favoriteIds } = useLocalStorage('favorites', []);
    const productFavorites = products.filter((product) => favoriteIds.includes(product.id));

    return (
        <>
            {productFavorites.length ? (
                <div className='grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {productFavorites.map((product) => (
                        <ProductCard key={product.id} {...product} variant="offer" />
                    ))}
                </div>
            ) : (
                <div className='flex flex-col justify-center items-center w-full! h-screen'>
                    <span className='flex flex-col gap-5  items-center text-3xl dark:text-gray-500'>
                        علاقه مندی وجود ندارد
                        <FaRegHeart className='text-5xl' />
                    </span>
                </div>
            )
            }
        </>
    )
}

export default Favorites