import Footer from '@/components/common/Footer'
import LogoBar from '@/components/common/LogoBar'
import NavBar from '@/components/common/NavBar'
import Services from '@/components/Services/AllServices'
import React from 'react'

const ServicesPage = () => {
  return (
    <main className='bg-beige-50'>
      <NavBar />
      <LogoBar />
      <Services />
      <Footer />
    </main>
  )
}

export default ServicesPage
