import Footer from '@/components/common/Footer'
import LogoBar from '@/components/common/LogoBar'
import NavBar from '@/components/common/NavBar'
import React from 'react'
import Ethics from '@/components/Ethics'

const OurEthicsPage = () => {
  return (
    <>
      <div className='bg-beige-50'>
        <NavBar />
        <LogoBar />
        <Ethics />
        <Footer />
      </div>
    </>
  )
}

export default OurEthicsPage
