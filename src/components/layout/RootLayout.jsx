import React from 'react'
import { Outlet, useMatches } from 'react-router'
import Topbar from './../common/Topbar/Topbar';
import Sidebar from '../common/Sidebar/Sidebar';
import useToggle from '../../hooks/useToggle';
import BackgroundOverlay from '../common/BackgroundOverlay';
import Footer from '../common/Footer/Footer';
import Bottombar from '../common/Bottombar/Bottombar';
import { Toaster } from 'sonner';
import useInitialLoader from '../../hooks/useInitialLoader';
import InitialLoader from '../common/InitialLoader/InitialLoader';

const RootLayout = () => {
    const { state: isOpen, toggle, onClose } = useToggle(false);
    const matchs = useMatches();
    const hideRootLayout = matchs.some((match) => match.pathname.includes('auth'));

    const isLoading = useInitialLoader();

    if (isLoading) {
        return <InitialLoader />
    }

    return (
        <>
            {
                !hideRootLayout && (
                    <>
                        <Toaster
                            position='top-right'
                            richColors
                            toastOptions={{
                                style: {
                                    fontFamily: "IRANSansXMedium"
                                }
                            }}
                        />
                        <Sidebar isOpen={isOpen} onClose={onClose} />
                        <main id='content' className='relative mb-4 md:mb-12 px-2 xl:px-16 mx-auto'>
                            <Topbar onToggle={toggle} />
                            <div>
                                <Outlet />
                            </div>
                            <Footer />
                            <Bottombar />
                        </main>
                        <BackgroundOverlay isOpen={isOpen} onClose={onClose} />

                    </>
                )
            }
        </>
    )
}

export default RootLayout