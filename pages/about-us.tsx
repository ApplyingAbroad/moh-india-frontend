import AboutUs from '@/components/AboutUs'
// import Team from '@/components/AboutUs/Team'
import React from 'react'
import MasterLayout from './_layout'

const AboutPage = () => {
  return (
    <>
      <MasterLayout title='About'>
        <AboutUs />
        {/* <Team /> */}
      </MasterLayout>
    </>
  )
}

export default AboutPage
