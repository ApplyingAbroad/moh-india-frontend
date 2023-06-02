import Footer from '@/components/common/Footer'
import LogoBar from '@/components/common/LogoBar'
import NavBar from '@/components/common/NavBar'
import Services from '@/components/Services/AllServices'
import React from 'react'
import MasterLayout from '../_layout'

const ServicesPage = () => {
  return (
    <MasterLayout title='Services'>
      <Services />
    </MasterLayout>
  )
}

export default ServicesPage
