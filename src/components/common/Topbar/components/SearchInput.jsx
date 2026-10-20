import React from 'react'
import { BiSearch } from 'react-icons/bi'
import useToggle from './../../../../hooks/useToggle'
import BackgroundOverlay from './../../BackgroundOverlay';
import { useNavigate } from 'react-router';
import useSearch from '../../../../hooks/useSearch';
import { getPopularProducts } from '../../../../utils/search';

const SearchInput = () => {
    const { state: isOpen, onOpen, onClose } = useToggle();
    const { searchValue, setSearchValue, products, isDebouncing } = useSearch();
    const navigate = useNavigate();

    const goToSearch = (value) => {
        const query = value.trim();
        if (!query) return;
        navigate(`/products?q=${encodeURIComponent(query)}`)
        onClose();
    }

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            goToSearch(searchValue)
        }
        if (event.key === "Escape") {
            onClose()
        }
    }


    const handleSelectSuggestion = (title) => {
        setSearchValue(title);
        goToSearch(title)

    }

    return (
        <>
            <div className='relative w-xs sm:w-1/2 lg:w-1/3' >
                <div className='flex w-[98%] items-center mx-auto border border-gray-200 rounded-full md:py-0.5 md:px-0.5 dark:bg-dark-100' onClick={onOpen}>
                    <button
                        type='button'
                        className='p-2 bg-primary-300 rounded-full cursor-pointer transition-all duration-300 hover:bg-primary-400'>
                        <BiSearch className='text-white sm:text-xl lg:text-3xl text-lg' />
                    </button>
                    <input type="text" readOnly autoComplete='off' value={searchValue} className='w-full self-stretch px-3 outline-0 text-gray-300 dark:text-gray-400 dark:placeholder:text-gray-400 text-sm ' placeholder='جستجو...' />
                </div>
                {isOpen && (
                    <div className='absolute -top-2 inset-x-0 h-fit max-h-60 flex shadow-200 flex-col rounded-lg  py-2 z-70 overflow-hidden bg-white dark:bg-dark-200'>
                        <div className='flex items-center dark:bg-dark-100 py-1 px-2 rounded-full p-2 border-0'>
                            <button
                                type='button'
                                onClick={() => goToSearch(searchValue)}
                                className='p-2 bg-primary-300 rounded-full cursor-pointer transition-all duration-300 hover:bg-primary-400 '>
                                <BiSearch className='text-white sm:text-xl lg:text-3xl text-lg' />
                            </button>
                            <input type="text" value={searchValue} onKeyDown={handleKeyDown} onChange={(event) => setSearchValue(event.target.value)} autoFocus className='w-full self-stretch px-3 outline-0 text-gray-300 dark:text-gray-400 dark:placeholder:text-gray-400 text-sm ' placeholder='جستجو...' />
                        </div>
                        <div className='search-scrollbar mt-2 dark:text-gray-400 overflow-y-auto'>
                            {!searchValue.trim() ? (
                                <div className='px-2 '>
                                    <h2 className='py-2 text-sm md:text-base'>محصولات پرطرفدار</h2>
                                    <ul className='flex items-center flex-wrap gap-2'>
                                        {getPopularProducts().map((product) => (
                                            <li key={product.id} className='text-sm border border-gray-300 rounded-2xl '>
                                                <button
                                                    onClick={() => handleSelectSuggestion(product.title)}
                                                    className='flex items-center gap-2 w-full border-none outline-none cursor-pointer px-2 py-1'>
                                                    {product.title}
                                                </button>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ) : products.length > 0 ? (
                                <ul className='flex-1 min-h-0 divide-y-1 *:text-sm divide-gray-200  dark:divide-gray-400  *:dark:hover:bg-black/20 *:hover:bg-gray-400/10 *:text-gray-400 '>
                                    {products.map((product) => (
                                        <li key={product.id}>
                                            <button
                                                onClick={() => handleSelectSuggestion(product.title)}
                                                className='flex items-center gap-2 w-full border-none outline-none cursor-pointer px-2 py-3'>
                                                <BiSearch className='size-5' />
                                                {product.title}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            ) : !isDebouncing ? (
                                <p className='px-2 py-3 text-gray-300 text-center text-sm'>
                                    نتیجه ای یافت نشد
                                </p>
                            ) : null}
                        </div>
                    </div>
                )}
            </div>
            <BackgroundOverlay isOpen={isOpen} onClose={onClose} />
        </>
    )
}

export default SearchInput