import React from 'react'
import { Link } from 'react-router'

import { BsTelegram, BsWhatsapp, BsYoutube, BsLinkedin } from "react-icons/bs";
import About from './components/About';
import FooterMenus from './components/FooterMenus';
import ContactUs from './components/ContactUs';
import FooterBadges from './components/FooterBadges';
import Logo from '../Logo';
import FooterNewsLetter from './components/FooterNewsLetter';
const Footer = () => {
    return (
        <footer className='bg-dark-200 dark:bg-dark-100 rounded-sm md:rounded-2xl px-4 pt-4 pb-2 md:px-6 md:py-6 lg:px-12 lg:py-12'>
            <div className='flex items-center sm:items-start flex-col lg:flex-row gap-4 md:gap-x-10 mb-6 lg:mb-9'>
                <About />
                <FooterMenus />
                <ContactUs />
                <FooterBadges />
            </div>
            <div className='flex items-center flex-col gap-y-2 lg:gap-y-0 lg:flex-row justify-between bg-dark-100 dark:bg-dark-200 px-4 py-2.5 lg:px-8 lg:py-5.25 rounded-2xl'>
                <Logo />
                <FooterNewsLetter />
            </div>
        </footer>
    )
}

export default Footer