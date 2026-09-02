import React from 'react'
import Banner from '../../features/home/Banner/Banner'
import PopularCategories from '../../features/home/PopularCategories/PopularCategories'
import OfferSection from '../../features/home/OfferSection/OfferSection'
import NewestProductsSection from '../../features/home/NewestProductsSection/NewestProductsSection'
import PromoBannerSection from '../../features/home/PromoBannerSection/PromoBannerSection'
import TopSellingProducts from '../../features/home/TopSellingProducts/TopSellingProducts'
import BrandsSection from '../../features/home/BrandsSection/BrandsSection'
import TrendingProducts from '../../features/home/TrendingProducts/TrendingProducts'
import ArticlesSection from '../../features/home/ArticlesSection/ArticlesSection'
const Home = () => {
  return (
    <>
      <Banner />
      <PopularCategories />
      <OfferSection />
      <NewestProductsSection />
      <PromoBannerSection />
      <TopSellingProducts />
      <BrandsSection />
      <TrendingProducts />
      <ArticlesSection />
    </>
  )
}

export default Home