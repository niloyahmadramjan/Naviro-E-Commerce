import BestSellers from '@/components/BestSellers'
import BreakfastFood from '@/components/BreakfastFood'
import Hero from '@/components/Hero'
import ProductsCard from '@/components/ProductsCard'
import PromoBanner from '@/components/PromoBanner'
import SubscribeBanner from '@/components/SubscribeBanner'
import VegetablesProducts from '@/components/VegetablesProducts'
import React from 'react'

export default function Home() {
  return <div>
    <Hero/>
    <BestSellers/>
    <VegetablesProducts/>
    <PromoBanner/>
    <BreakfastFood/>
    <ProductsCard/>
    <SubscribeBanner/>
  </div>
}
