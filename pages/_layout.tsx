import Footer from '@/components/common/Footer'
import LogoBar from '@/components/common/LogoBar'
import NavBar from '@/components/common/NavBar'
import React from 'react'

interface Props {
  children: React.ReactNode
}

const MasterLayout = ({ children }: Props) => {
  return (
    <main className='bg-beige-50'>
      <NavBar />
      <LogoBar />
      {children}
      <Footer />
    </main>
  )
}

export default MasterLayout
