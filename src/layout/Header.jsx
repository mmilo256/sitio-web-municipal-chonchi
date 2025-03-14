import React from 'react'
import Navbar from './Navbar'
import TopBar from './TopBar'
import Hero from './Hero'
import Carousel from '../components/Carousel'

const Header = ({ withHero }) => {
  return (
    <header>
      <TopBar />
      <Navbar />
      {withHero && <Carousel />}
    </header>
  )
}

export default Header