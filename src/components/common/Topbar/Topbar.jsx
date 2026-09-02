import React, { useState } from 'react'
import TopbarLogo from './components/TopbarLogo'
import Searchinput from './components/Searchinput'
import CartButton from './components/CartButton'

import Theme from './components/Theme'
import TopbarMenu from './components/TopbarMenu';
import Account from './components/Account'
import AuthButton from './components/AuthButton'

const Topbar = ({ onToggle }) => {
    const [isLogin, setIsLogin] = useState(true)
    return (
        <header className='bg-white dark:bg-dark-200 pt-2 md:pt-5 lg:pt-10 mb-4 md:mb-8 transition-colors duration-300'>
            <div className='flex items-center justify-between mb-2 md:mb-4 lg:mb-7 px-2 gap-2 md:gap-0'>
                <TopbarLogo />
                <Searchinput />
                <div className='flex items-center md:gap-3 lg:gap-6'>
                    {
                        isLogin ? (
                            <Account />
                        ) : (
                            <AuthButton />
                        )
                    }
                    <Theme />
                    <CartButton />
                </div>
            </div>
            <TopbarMenu onToggle={onToggle} />
        </header>
    )
}

export default Topbar