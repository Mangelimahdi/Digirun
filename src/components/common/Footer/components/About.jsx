import React from 'react'
import { BsLinkedin, BsTelegram, BsWhatsapp, BsYoutube } from 'react-icons/bs'
import { Link } from 'react-router'

const About = () => {
  return (
    <div className='flex-2 w-full sm:w-auto'>
      <h2 className='text-white text-lg lg:text-xl text-center sm:text-start mb-4 lg:mb-10.5'>
        درباره
        دیجی ران
      </h2>
      <p className='text-gray-300 text-xs/loose text-center sm:text-start lg:text-base dark:text-gray-400 mb-4 lg:mb-10'>
        دیجیران یک فروشگاه آنلاین تخصصی در حوزه لپ‌تاپ، گوشی موبایل و لوازم دیجیتال است. ما با ارائه‌ی محصولات اصل، قیمت‌های رقابتی و ارسال سریع، تجربه‌ای مطمئن از خرید آنلاین را برای شما فراهم می‌کنیم. تمامی کالاها دارای ضمانت اصالت و مهلت بازگشت هستند. پشتیبانی حرفه‌ای، مشاوره رایگان و خدمات پس از فروش از جمله تعهدات ما به مشتریان عزیز است.
      </p>
      <div className='flex items-center justify-center sm:justify-start gap-4.5'>
        <Link to="/">
          <BsTelegram className='text-2xl text-primary-300' />
        </Link>
        <Link to="/">
          <BsWhatsapp className='text-2xl text-primary-300' />
        </Link>
        <Link to="/">
          <BsYoutube className='text-2xl text-primary-300' />
        </Link>
        <Link to="/">
          <BsLinkedin className='text-2xl text-primary-300' />
        </Link>
      </div>
    </div>
  )
}

export default About