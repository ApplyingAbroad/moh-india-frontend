import CTA from '@/components/common/CTA'
import Features from '@/components/Home/Features'
import Hero from '@/components/Home/Hero'
import React from 'react'
import Services from '@/components/Services/AllServices'
import MasterLayout from './_layout'

const HomePage = () => {
  return (
    <>
      <MasterLayout>
        <Hero />
        <Services />
        <Features />
        <CTA />
      </MasterLayout>
    </>
  )
}

export default HomePage
