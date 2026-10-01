import React from 'react'
import ContactForm from '../../features/contactus/ContactForm/ContactForm';
import ContactHeader from '../../features/contactus/ContactHeader/ContactHeader';
import ContactFooter from '../../features/contactus/ContactFooter/ContactFooter';
import Breadcrumb from '../../components/common/Breadcrumb/Breadcrumb';
import { IoHomeOutline } from "react-icons/io5";

const ContactUs = () => {
    const breadcrumbs = [
        {
            icon: IoHomeOutline,
            title: "خانه",
            path: "/",
        },
        {
            title: "تماس با ما",
        },
    ]

    return (
        <>
            <Breadcrumb breadcrumbs={breadcrumbs} />
            <div className='mb-4 lg:mb-22 max-w-216 mx-auto'>
                <div className='dark:bg-dark-100 p-4 rounded-sm shadow-100'>
                    <ContactHeader />
                    <ContactForm />
                    <ContactFooter />
                </div>
            </div >
        </>
    )
}

export default ContactUs