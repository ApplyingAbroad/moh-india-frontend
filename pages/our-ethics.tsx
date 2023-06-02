import Footer from '@/components/common/Footer'
import LogoBar from '@/components/common/LogoBar'
import NavBar from '@/components/common/NavBar'
import React from 'react'
import Ethics from '@/components/Ethics'
import CTA from '@/components/common/CTA'
import MasterLayout from './_layout'

const OurEthicsPage = () => {
  return (
    <>
      <MasterLayout title='Our Ethics'>
        <Ethics />
        <CTA />
      </MasterLayout>
    </>
  )
}

export default OurEthicsPage
