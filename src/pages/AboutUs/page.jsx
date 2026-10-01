import React from 'react'

const AboutUs = () => {
    return (
        <div className='flex flex-col  md:items-end md:flex-row'>
            <div>
                <h2 className='dark:text-gray-500 text-gray-400 md:text-xl mb-2 md:mb-4'>
                    درباره
                    دیجی
                    {" "}
                    <span className='text-primary-300'>ران</span>
                </h2>
                <p className='mb-4 leading-8 dark:text-gray-500 text-gray-400 text-sm md:text-base'>دیجی‌ران جاییست برای خرید سریع، مطمئن و راحت محصولات دیجیتال. ما این فروشگاه رو ساختیم تا شما بدون دغدغه بتونید به کالاهای اصلی و با‌کیفیت دسترسی داشته باشید، با قیمت مناسب، خدمات حرفه‌ای، و پشتیبانی واقعی.</p>
                <div className='mb-3 md:mb-6'>
                    <h2 className='dark:text-gray-500 text-gray-400 md:text-xl mb-2 md:mb-4'>
                        چه کالا هایی در
                        دیجی
                        {" "}
                        <span className='text-primary-300'>ران</span>
                        {" "}
                        می فروشیم؟
                    </h2>
                    <p className='dark:text-gray-500 text-gray-400 mb-2 text-sm md:text-base'>در دیجی‌ران می‌تونید این موارد رو پیدا کنید:</p>
                    <ul className='list-disc leading-8 dark:text-gray-500 text-gray-400 text-sm md:text-base pr-6 '>
                        <li>گوشی موبایل از برندهای معتبر</li>
                        <li>لپ‌تاپ برای کار و تحصیل</li>
                        <li>گجت‌های هوشمند (ساعت، مچ‌بند، هندزفری و...)</li>
                        <li>لوازم جانبی دیجیتال (شارژر، کابل، کیف، پایه نگهدارنده و...)</li>
                        <li>تجهیزات حرفه‌ای برای خانه یا دفتر کار</li>
                    </ul>
                    <p className='dark:text-gray-500 text-gray-400 mt-1 text-sm md:text-base'>همه‌ی محصولات با ضمانت اصالت و گارانتی معتبر ارائه می‌شن.</p>
                </div>
                <div className='mb-6'>
                    <h2 className='dark:text-gray-500 text-gray-400 md:text-xl mb-2 md:mb-4'>چه خدماتی به شما میدهیم؟</h2>
                    <ul className='leading-8 dark:text-gray-500 text-gray-400 text-sm md:text-base pr-3 md:pr-6 '>
                        <li>✅ارسال سریع در سراسر کشور</li>
                        <li>✅پرداخت امن با کارت های عضو شتاب</li>
                        <li>✅امکان بازگشت کالا طبق شرایط</li>
                        <li>✅پشتیبانی واقعی از طریق چت، تماس و پیام</li>
                        <li>✅اطلاع رسانی لحظه ای وضعیت سفارش از ثبت تا تحویل</li>
                    </ul>
                </div>
                <div className='mb-6 '>
                    <h2 className='dark:text-gray-500 text-gray-400 md:text-xl mb-2 md:mb-4'>
                        چرا دیجی
                        {" "}
                        <span className='text-primary-300'>ران</span>
                        {" "}
                        رو انتخاب کنید؟
                    </h2>
                    <ul className='leading-8 dark:text-gray-500 text-gray-400 text-sm + md:text-base pr-3 md:pr-6'>
                        <li>نیازی نیست  ساعت ها بازار رو بگردید، همه چیز اینجاست</li>
                        <li>از موجود بودن وقیمت کالا مطمئن میشی چون ما اطلاعات رو هر روز بروز میکنیم</li>
                        <li>اگر سوالی داشتی، تنها نیستی، پشتیبان های ما پاسخ گو هستند</li>
                        <li>خرید از دیجی ران تجربه ای ساده، شفاف وبدون پیچیدگیه</li>
                    </ul>
                </div>
                <div className='mb-3 md:mb-6'>
                    <h2 className='dark:text-gray-500 text-gray-400 text-lg md:text-xl mb-2 md:mb-4'>
                        حرف اخر
                    </h2>
                    <p className='dark:text-gray-500 text-gray-400 text-sm md:text-base leading-8'>
                        ما دیجی‌ران رو ساختیم تا خرید دیجیتال، برای شما راحت، سریع و قابل‌اعتماد باشه. هر روز بهتر می‌شیم تا تجربه‌ی بهتری برای شما بسازیم. ممنون که ما رو انتخاب کردید .
                    </p>
                </div>
            </div>
            <div className=''>
                <img src="/images/aboutus.png" className='w-full' alt='دیجی ران' />
            </div>
        </div>
    )
}

export default AboutUs