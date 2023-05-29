import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
  return (
    <>
      <div className='pb-8 container xl:max-w-7xl mx-auto px-4 lg:px-10 relative my-5 lg:my-10'>
        <div role='img' className='relative h-96 lg:h-[500px] w-full'>
          <Image
            fill
            src='/product/header.jpg'
            alt=''
            className='object-cover lg:object-top object-left'
          />
        </div>
        <img
          src='/product/stock_images/fashion (8).jpg'
          alt=''
          className='hidden lg:block absolute -bottom-0 w-1/4 object-cover object-top right-32 h-96'
        />
        <div className='font-serif grid'>
          <h1 className='text-2xl lg:text-4xl max-w-xl mt-5 leading-normal text-black font-medium'>
            Experience End-to-End Clothing Production with Our Full-Service
            Manufacturing Factory
          </h1>
          <Link
            className='text-lg lg:text-2xl mt-5 text-black underline decoration-1 underline-offset-8 hover:decoration-2'
            href='/contact'>
            Contact us now &rarr;
          </Link>
        </div>
      </div>
    </>
  )
}

export default Hero