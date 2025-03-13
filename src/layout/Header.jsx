import React from 'react'
import Navbar from './Navbar'
import TopBar from './TopBar'
import Hero from './Hero'

const Header = ({ withHero }) => {
  return (
    <header>
      <TopBar />
      <Navbar />
      {withHero && <Hero />}
    </header>
  )
}

export default Header