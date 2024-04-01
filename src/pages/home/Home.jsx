import React from 'react'
import Slider from '../../components/slider/Slider'
import FeaturedProducts from '../../components/featuredProducts/FeaturedProducts'

const Home = () => {
  return (
    <div>
      <Slider/>
      <FeaturedProducts type="Featured"/>
      <FeaturedProducts type="Trending"/>
    </div>
  )
}

export default Home