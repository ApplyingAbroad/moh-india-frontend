import React from 'react'

const MainContent = () => {
  return (
    <>
      <div className='pb-8 container xl:max-w-7xl mx-auto px-4 lg:px-10 relative my-5 lg:my-10'>
        <img
          src='/product/header.jpg'
          alt=''
          className='h-96 lg:h-[500px] w-full object-cover lg:object-top object-left'
        />
        <img
          src='/product/stock_images/fashion (8).jpg'
          alt=''
          className='hidden lg:block absolute -bottom-0 w-1/4 object-cover object-top right-32 h-96'
        />
        <div className='font-serif grid'>
          <h1 className='text-2xl lg:text-4xl max-w-xl mt-5 leading-normal text-orange-950 font-medium'>
            Experience End-to-End Clothing Production with Our Full-Service
            Manufacturing Factory
          </h1>
          <a
            className='text-lg lg:text-2xl mt-5 text-orange-800 hover:text-orange-600'
            href='#'>
            Contact us now &rarr;
          </a>
        </div>
      </div>
    </>
  )
}

export default MainContent
