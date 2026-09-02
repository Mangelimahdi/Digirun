import React from 'react'
import { Outlet } from 'react-router'
import AccountSidebar from '../components/AccountSidebar'
import AccountSidebarToggle from '../components/AccountSidebarToggle'
import useToggle from '../../../hooks/useToggle'
import BackgroundOverlay from '../../../components/common/BackgroundOverlay'

const AccountLayout = () => {
    const { state: isOpen, onOpen, onClose } = useToggle(false)
    return (
        <section className='flex items-start gap-8 mb-8 w-full'>
            <AccountSidebar isOpen={isOpen} onClose={onClose} />
            <BackgroundOverlay isOpen={isOpen} onClose={onClose} />
            <main className='w-full lg:w-3/4'>
                <AccountSidebarToggle onClick={onOpen} />
                <Outlet />
            </main>
        </section>
    )
}

export default AccountLayout