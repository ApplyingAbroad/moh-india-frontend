import Footer from '@/components/Footer'
import LogoBar from '@/components/Hero/LogoBar'
import NavBar from '@/components/Hero/NavBar'
import Services from '@/components/Services'
import React from 'react'

export default () => {
  return (
    <main className='bg-orange-50'>
      <NavBar />
      <LogoBar />
      <Services />
      <Footer />
    </main>
  )
}
