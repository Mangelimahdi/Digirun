import React, { useContext } from 'react'
import Logo from '../../components/common/Logo'
import { Link } from 'react-router';
import ThemeContext from '../../Contexts/Theme';
import { BiMoon, BiSun } from 'react-icons/bi';
import { FaArrowRight } from "react-icons/fa6";
import PhoneInput from './components/PhoneInput';
import OtpInput from './components/OtpInput';

import clsx from 'clsx';
import useAuth from '../../hooks/useAuth';
import { Toaster } from 'sonner';

const AuthCard = () => {
    const {
        isOtpSent,
        phone,
        otp,
        isExpired,
        otpRefs,
        getFormattedTime,
        handleKeyDown,
        handlePaste,
        handlePhoneChange,
        handleOtpChange,
        handleSubmit,
        handleResendOtp,
        handleBack,
    } = useAuth();

    const { theme, toggleTheme } = useContext(ThemeContext);

    const title = isOtpSent
        ? 'کد تایید را وارد کنید.'
        : "ثبت نام | ورود";
    const description = isOtpSent
        ? `کد تایید به شماره ${phone} ارسال گردید.`
        : `لطفا شماره موبایل خود را وارد کنید.`;
    const submitButtonText = isOtpSent
        ? "ثبت کد"
        : "ارسال کد";
    return (
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
            <div className='p-4 md:p-6 shadow-100 rounded-lg bg-white dark:bg-dark-100 w-92 mb-8 transition-colors  duration-300'>
                <div className='flex items-center mb-3'>
                    <button
                        onClick={handleBack}
                        className='*:transition-colors *:duration-200' >
                        <FaArrowRight className='size-4 text-gray-400' />
                    </button>
                    <button onClick={toggleTheme} className='flex justify-end w-full cursor-pointer'>
                        {theme === "light"
                            ? (<BiMoon className='lg:text-3xl text-xl text-gray-300 dark:text-gray-400' />)
                            : (<BiSun className='lg:text-3xl text-xl text-gray-300 dark:text-gray-400' />)}
                    </button>
                </div>
                <Logo />
                <div className='mt-10 *:transition-colors *:duration-200 '>
                    <h2 className='text-xs sm:text-sm md:text-base mb-8 text-gray-500'>{title}</h2>
                    <p className='text-xs sm:text-sm mb-8 text-gray-400 dark:text-gray-500'>{description}</p>
                    <form onSubmit={handleSubmit} className='mb-4'>
                        {isOtpSent ? (
                            <div className='flex items-center justify-center gap-2 sm:gap-4' dir='ltr'>
                                {otp.map((value, index) => (
                                    <OtpInput
                                        index={index}
                                        value={value}
                                        onChange={handleOtpChange}
                                        onKeyDown={handleKeyDown}
                                        onPaste={handlePaste}
                                        key={index}
                                        ref={(element) => otpRefs.current[index] = element} />))}
                            </div>)
                            : (
                                <PhoneInput
                                    phone={phone}
                                    onChange={handlePhoneChange}
                                />
                            )}
                        <button
                            className={clsx("w-full text-white bg-primary-300 hover:bg-primary-300/70 dark:hover:bg-primary-400 cursor-pointer transition-colors duration-300 rounded-lg py-2.5 text-xs sm:text-sm md:text-base",
                                isExpired && isOtpSent && "opacity-50 cursor-not-allowed"
                            )}
                            disabled={isExpired && isOtpSent}
                        >
                            {submitButtonText}
                        </button>
                    </form>
                    {isOtpSent
                        ? (
                            <div className='text-center'>
                                {isExpired
                                    ? (
                                        <button onClick={handleResendOtp} className='text-sm text-primary-300 hover:underline cursor-pointer'>
                                            ارسال مجدد کد
                                        </button>
                                    ) : (
                                        <span className='text-gray-500 text-sm'>
                                            مانده تا دریافت مجدد کد : {" "}
                                            <span className='text-primary-300'>{getFormattedTime()}</span>
                                        </span>
                                    )}
                            </div>
                        )
                        : (
                            <span className='block text-center text-gray-400 text-xs sm:text-sm'>
                                ورود شما به معنای پذیرش
                                {" "}
                                <Link to='rules' className='text-primary-300'>
                                    قوانین سایت
                                </Link>
                                {" "}
                                است.
                            </span>
                        )
                    }

                </div>
            </div>
        </>
    )
}

export default AuthCard