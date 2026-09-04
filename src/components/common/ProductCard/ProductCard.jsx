import { Link } from 'react-router'
import HeaderOfferProductCard from './HeaderOfferProductCard'
import HeaderRateProdactCard from './HeaderRateProdactCard';
import FooterProductCard from './FooterProductCard';
import { getProductPrice } from '../../../utils/getProductPrice.js'
import clsx from 'clsx';

const ProductCard = ({ id, title, images, price, rating, discount, variant, hoverEffect = "zoom" }) => {
    const { originalPrice, finalPrice, } = getProductPrice(price, discount);

    return (
        <div className={clsx('bg-white group dark:bg-dark-100 p-1.5 md:p-2 lg:p-2.5 rounded-2xl block transition-all duration-300 shadow-100 hover:shadow-200 overflow-hidden ',
            hoverEffect === 'lift' && "hover:-translate-y-3.5"
        )}>
            {variant === "offer"
                ? <HeaderOfferProductCard productId={id} discount={discount} />
                : <HeaderRateProdactCard rating={rating} />
            }
            <Link to={`/products/${id}`} className='flex flex-col items-center border-b border-gray-300 dark:border-gray-500 pb-1.5 mt-1.5 md:pb-3'>
                <img src={`${images?.[0]}`} className={clsx('h-42 w-50 object-cover xs:w-38 xs:h-32 sm:h-36 sm:w-44 md:h-52 md:w-60 lg:w-full lg:h-full transition-all duration-300 mb-1.5 ',
                    hoverEffect === "zoom" && 'group-hover:scale-105'
                )} />
                <span className='text-xs md:text-sm line-clamp-1 text-gray-400 dark:text-gray-500'>
                    {title}
                </span>
            </Link>
            <FooterProductCard originalPrice={originalPrice} finalPrice={finalPrice} />
        </div>
    );
}

export default ProductCard