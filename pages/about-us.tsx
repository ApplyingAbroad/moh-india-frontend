import AboutUs from '@/components/AboutUs'
// import Team from '@/components/AboutUs/Team'
import React from 'react'
import MasterLayout from './_layout'
import CTA from '@/components/common/CTA'

const AboutPage = () => {
  return (
    <>
      <MasterLayout title='About'>
        <AboutUs />
        {/* <Team /> */}
        <CTA />
      </MasterLayout>
    </>
  )
}

export default AboutPage
