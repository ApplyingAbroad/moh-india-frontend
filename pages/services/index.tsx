import Footer from '@/components/Footer'
import LogoBar from '@/components/Hero/LogoBar'
import NavBar from '@/components/Hero/NavBar'
import Services from '@/components/Services/AllServices'
import React from 'react'

const ServicesPage = () => {
  return (
    <main className='bg-orange-50'>
      <NavBar />
      <LogoBar />
      <Services />
      <Footer />
    </main>
  )
}

export default ServicesPage
