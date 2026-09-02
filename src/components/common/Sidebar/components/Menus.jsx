import React from 'react'

import { NavLink } from 'react-router'
import { sidebarMenus } from '../../../../data/data'

const Menus = () => {
    return (
        <ul className='flex flex-col text-sm *:overflow-hidden *:text-gray-300 dark:*:text-gray-500 *:hover:bg-primary-300 *:transition-all *:duration-200 *:rounded-sm  *:hover:text-white    '>
            {
                sidebarMenus.map((menu) => (
                    <li key={menu.id} className='p-0'>
                        <NavLink to={menu.href} end className={({isActive}) => `flex items-center py-2 px-2 gap-2  ${isActive && "dark:bg-dark-200 text-primary-300"}`}>
                            <menu.Icon />
                            {menu.title}
                        </NavLink>
                    </li>
                ))
            }
        </ul>
    )
}

export default Menus