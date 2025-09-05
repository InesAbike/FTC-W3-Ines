import React from 'react'
import HeroSection from './components/landing-page/HeroSection'
import PetsSection from './components/landing-page/PetsSection'
import CTA_1 from './components/landing-page/CTA-1'
import ProductsSection from './components/landing-page/ProductsSection'
import Sellers from './components/landing-page/Sellers'
import CTA_2 from './components/landing-page/CTA-2'
import ArticlesSection from './components/landing-page/ArticlesSection'

const Page = () => {
  return (
    <div>
      <HeroSection />
      <PetsSection /> 
      <CTA_1 />
      <ProductsSection />
      <Sellers />
      <CTA_2 />
      <ArticlesSection />
    </div>
  )
}

export default Page