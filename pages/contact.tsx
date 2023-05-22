import ContactForm from '@/components/ContactUs'
import Footer from '@/components/Footer'
import LogoBar from '@/components/Hero/LogoBar'
import NavBar from '@/components/Hero/NavBar'
import React from 'react'

const Contact = () => {
  return (
    <>
      <main className='bg-orange-50 min-h-screen grid'>
        <NavBar />
        {/* <LogoBar /> */}
        <ContactForm />
        <Footer />
      </main>
    </>
  )
}

export default Contact
