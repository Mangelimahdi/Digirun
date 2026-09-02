import React, { useContext } from 'react'
import { BiMoon, BiSun } from 'react-icons/bi'
import ThemeContext from '../../../../Contexts/Theme'

const Theme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
    return (
        <button className='p-2 border border-gray-200 dark:border-gray-400 rounded-full cursor-pointer transition-all *:transition-all duration-300 hover:bg-primary-300 hover:*:text-white' onClick={toggleTheme}>
            {theme === "light"
                ? (<BiMoon className='lg:text-3xl text-xl text-gray-300 dark:text-gray-400' />)
                : (<BiSun className='lg:text-3xl text-xl text-gray-300 dark:text-gray-400' />)}
        </button>
    )
}

export default Theme