import React from 'react'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, withHero = false }) => {
  return (
    <div className='bg-[#f2f2f2] min-h-dvh'>
      <Header withHero={withHero} />
      {children}
      <Footer />
    </div>
  )
}

export default Layout