import Footer from '@/components/common/Footer'
import LogoBar from '@/components/common/LogoBar'
import NavBar from '@/components/common/NavBar'
import Head from 'next/head'
import React from 'react'

interface Props {
  title?: string
  children: React.ReactNode
}

const MasterLayout = ({ title, children }: Props) => {
  return (
    <main className='bg-beige-50'>
      <Head>
        <title>
          {title ? title + ' | ' : ''} Tailor and Company - Exceptional
          Tailoring for Your Unique Style
        </title>
      </Head>
      <NavBar />
      <LogoBar />
      {children}
      <Footer />
    </main>
  )
}

export default MasterLayout
