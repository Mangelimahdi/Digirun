import React from 'react'
import { IoBagHandleOutline } from "react-icons/io5";
import Desktop from './components/Desktop';
import Mobile from './components/Mobile';
import ProfileSectionHeader from '../components/AccountSectionHeader';
const Orders = () => {
    return (
        <>
            <div className='bg-white shadow-100 dark:bg-dark-100 mb-8 rounded-lg p-4 md:p-8'>
                <ProfileSectionHeader
                    icon={<IoBagHandleOutline className='text-primary-400 text-2xl lg:text-4xl' />}
                    title='سفارش های اخیر'
                />
                <Desktop />
                <Mobile />
            </div>
        </>
    )
}

export default Orders