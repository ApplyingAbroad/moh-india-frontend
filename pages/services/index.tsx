import Services from '@/components/Home/Services/AllServices'
import React from 'react'
import MasterLayout from '../_layout'

const ServicesPage = () => {
  return (
    <MasterLayout title='Services'>
      <Services showAll={true} />
    </MasterLayout>
  )
}

export default ServicesPage
