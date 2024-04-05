import React from 'react'
import Slider from '../../components/slider/Slider'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'
import Categories from '../../components/categories/Categories'
import Contact from '../../components/contact/Contact'
import Products from '../products/Products'

const Home = () => {
  return (
    <>
      <Slider/>
      <FeaturedProducts type="Featured"/>
      <FeaturedProducts type="Trending"/>
      <Categories/>
      <Products/>
      <Contact/>
    </>
  )
}

export default Home