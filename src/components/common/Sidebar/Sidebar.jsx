import React, { useEffect } from 'react'
import SidebarHeader from './components/SidebarHeader'
import Menus from './components/Menus';
import clsx from 'clsx'
import { useLocation } from 'react-router';

const Sidebar = ({ isOpen, onClose, children }) => {
    const location = useLocation();
    useEffect(() => {
        if (isOpen) {
            onClose();
        }
    }, [location.pathname, onClose])

    return (
        <aside className={clsx("fixed z-50 w-54 h-screen right-0 bg-white dark:bg-dark-100 px-4 pt-4 !transition-all !duration-300 md:hidden",
            isOpen ? "translate-x-0 opacity-100 visible" : 'translate-x-full opacity-0 invisible'
        )}>
            <SidebarHeader onClose={onClose} />
            <Menus />
            {children}
        </aside>
    )
}

export default Sidebar