import { CubeTransparentIcon, ArrowDownIcon } from '@heroicons/react/24/outline'
import { HeartIcon } from '@heroicons/react/24/solid'

import React from 'react'

const values = [
  {
    name: 'Passion',
    description:
      'We are passionate with what we do and love crafting products that can make your life easier and help you succeed. We pay attention to small details and always aiming for the best.',
    icon: (
      <HeartIcon className='text-red-500 hi-solid hi-heart inline-block w-5 h-5' />
    ),
  },
  {
    name: 'Commitment',
    description:
      'We are committed to our work and stand by our projects. Our aim is to improve them in every update and offer the most full-featured packages with the smallest possible footprint.',
    icon: (
      <ArrowDownIcon
        strokeWidth={2.5}
        className='text-blue-500 hi-solid hi-arrow-down inline-block w-5 h-5'
      />
    ),
  },
  {
    name: 'Less is More',
    description:
      'We believe that design should be invisible and enhance the user experience, not get in the way. This gives room for your content to breath and attracts your users’ attention.',
    icon: (
      <CubeTransparentIcon
        strokeWidth={2}
        className='text-pink-500 hi-solid hi-cube-transparent inline-block w-5 h-5'
      />
    ),
  },
]

const AboutUs = () => {
  return (
    <>
      <div className='space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-20'>
        {/* Heading */}
        <div>
          <h2 className='font-serif text-3xl md:text-4xl font-semibold mb-4'>
            We are <span className='font-light'>Tailor & Company</span>
          </h2>
          <h3 className='text-lg md:leading-relaxed font-light lg:w-1/2'>
            A passionate team who are here to help you code and build your
            business using powerful tools.
          </h3>
        </div>
        {/* END Heading */}

        {/* Images */}
        <div className='grid grid-cols-2 md:grid-cols-3 w-full gap-5'>
          <img
            src='https://cdn.tailkit.com/media/placeholders/photo-gMsnXqILjp4-1280x800.jpg'
            alt='Featured Image'
            className='col-span-2 object-cover object-center h-96 w-full'
          />
          <img
            src='https://cdn.tailkit.com/media/placeholders/photo-c3tNiAb098I-600x800.jpg'
            alt='Featured Image'
            className='hidden md:block col-span-1 object-cover object-center h-96 w-full'
          />
        </div>
        {/* END Images */}

        {/* Values */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-16'>
          {values.map((value, index) => (
            <div key={index}>
              <h3 className='flex items-center space-x-2 text-lg font-bold uppercase tracking-wide mb-2'>
                {value.icon}
                <span>{value.name}</span>
              </h3>
              <p className='font-serif leading-relaxed text-gray-700'>
                {value.description}
              </p>
            </div>
          ))}
        </div>
        {/* END Values */}
      </div>
    </>
  )
}

export default AboutUs
