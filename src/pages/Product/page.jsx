import React from 'react'

import ProductFeatures from '../../features/product/ProductFeatures/ProductFeatures';
import ProductGallery from '../../features/product/ProductGallery/ProductGallery';
import ProductInfo from '../../features/product/ProductInfo/ProductInfo';
import ProductActions from '../../features/product/ProductActions/ProductActions';
import { useParams } from 'react-router';
import products from '../../data/products';
import ProductCategory from '../../features/product/ProductCategory/ProductCategory';
import ProductServices from '../../features/product/ProductServices/ProductServices';
import ProductPurchase from '../../features/product/ProductPurchase/ProductPurchase';
import RelatedProducts from '../../features/product/RelatedProducts/RelatedProducts';
import ProductsDetails from '../../features/product/ProductDetails/ProductsDetails';

const Product = () => {
    const param = useParams();
    const productId = param.productId;
    const mainProduct = products.find((product) => product.id === Number(productId));

    return (
        <div className='mb-4 lg:mb-22'>
            <div className='flex flex-col lg:items-start lg:flex-row gap-4 lg:mb-22'>
                <div className='bg-white dark:bg-dark-100 py-2 px-3 md:py-4 md:px-6 shadow-100 lg:w-3/4 rounded-lg'>
                    <div className='flex flex-col lg:flex-row gap-x-5 mb-5'>
                        <div className='flex lg:hidden items-center justify-between mb-2'>
                            <ProductCategory
                                brand="ایسر"
                                category="لپ تاپ ایسر" />
                            <ProductActions />
                        </div>
                        <div className='w-full lg:w-1/3'>
                            <ProductGallery
                                images={mainProduct.images}
                                title={mainProduct.title}
                            />
                        </div>
                        <div className='w-full lg:w-2/3 flex flex-col justify-between'>
                            <div className='hidden lg:flex items-center justify-between mb-2'>
                                <ProductCategory
                                    brand="ایسر"
                                    category="لپ تاپ ایسر"
                                />
                                <ProductActions productId={mainProduct.id} />
                            </div>
                            <ProductInfo product={mainProduct} />
                            <ProductFeatures features={mainProduct.features} />
                        </div>
                    </div>
                    <ProductServices />
                </div>
                <div className='w-full lg:w-1/4'>
                    <ProductPurchase productId={mainProduct.id} price={mainProduct.price} />
                </div>
            </div>
            <div>
                <RelatedProducts relatedProductsIds={mainProduct.relatedProductsIds} />
                <ProductsDetails introducion={mainProduct.longDescription} features={mainProduct.features} />
            </div>
        </div>
    )
}

export default Product;