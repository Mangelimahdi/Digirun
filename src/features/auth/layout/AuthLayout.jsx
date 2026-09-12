import React from 'react'
import { Outlet } from 'react-router'

const AuthLayout = () => {
    return (
        <div className='flex justify-center items-center h-screen px-2'>
            <Outlet />
        </div>
    )
}

export default AuthLayout