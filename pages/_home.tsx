import CTA from '@/components/CTA'
import Features from '@/components/Features'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Products from '@/components/Gallery'
import React from 'react'
import ServicePage from '@/components/Services/SingleService'
import Services from '@/components/Services/AllServices'

const Main = () => {
  return (
    <>
      <Hero />
      <Services />
      <Features />
      <CTA />
      <Footer />
    </>
  )
}

export default Main
