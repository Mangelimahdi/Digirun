import React from 'react'
import Tooltip from '../../../../components/common/Tooltip/Tooltip'
import useFavorites from '../../../../hooks/useFavorites'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

const Favorite = ({ productId }) => {
  const { toggleFavorite, isFavorite } = useFavorites(productId);
  const favorite = isFavorite();
  return (
    <Tooltip text="علاقه مندی">
      <button className='rounded-full border border-gray-400 p-1.5 text-gray-400 dark:text-gray-500 cursor-pointer hover:bg-gray-200/30 dark:hover:bg-gray-300/30 transition-all duration-300' onClick={() => toggleFavorite(productId)}>
        {favorite === true
          ? (<FaHeart className='text-lg text-error' />)
          : (<FaRegHeart className='text-lg' />)}
      </button>
    </Tooltip>
  )
}

export default Favorite