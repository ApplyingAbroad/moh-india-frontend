import CTA from '@/components/common/CTA'
import Features from '@/components/Features'
import Hero from '@/components/Home/Hero'
import React from 'react'
import Services from '@/components/Home/Services/AllServices'
import MasterLayout from './_layout'
import AboutUs from '@/components/Home/AboutUs'

const HomePage = () => {
  return (
    <>
      <MasterLayout>
        <Hero />
        <AboutUs />
        <Services showAll={false} />
        <Features />
        <CTA />
      </MasterLayout>
    </>
  )
}

export default HomePage
