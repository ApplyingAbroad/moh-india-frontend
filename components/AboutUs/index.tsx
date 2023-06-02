import {
  CubeTransparentIcon,
  ArrowDownIcon,
  // CameraIcon,/
} from '@heroicons/react/24/outline'
import {
  HeartIcon,
  CameraIcon,
  PuzzlePieceIcon,
} from '@heroicons/react/24/solid'

import React from 'react'

const values = [
  {
    name: 'Our Story',
    description: `Our journey has just began with a mission to revolutionize tailoring. Founder Mr. Dinesh Aggarwal combined traditional craftsmanship with modern design, creating a brand known for impeccable fit and reflecting individuality. Today, we're a thriving company, trusted by customers from all walks of life. Craftsmanship, innovation, and customer satisfaction remain our core values.
`,
    icon: (
      <PuzzlePieceIcon className='text-lime-600 hi-solid hi-heart inline-block w-5 h-5' />
    ),
  },
  {
    name: 'Our Philosophy',
    description: `At tailorandcompany.com, our philosophy is simple: exceptional tailoring for your unique style. We use the finest fabrics, skilled craftsmanship, and innovative techniques to create high-quality garments. With personalized attention to detail, we ensure your satisfaction every step of the way. Your journey, our honor.
`,
    icon: (
      <HeartIcon className='text-red-500 hi-solid hi-arrow-down inline-block w-5 h-5' />
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
            A dedicated team committed to delivering high-quality tailoring
            services tailored to your unique style and preferences.
          </h3>
        </div>
        {/* END Heading */}

        {/* Images */}
        <div className='grid grid-cols-2 md:grid-cols-3 w-full gap-5'>
          <img
            src='/about/about-left.webp'
            alt='Featured Image'
            className='col-span-2 object-cover object-center h-96 w-full'
          />
          <img
            src='/about/about-right.webp'
            alt='Featured Image'
            className='hidden md:block col-span-1 object-cover object-center h-96 w-full'
          />
        </div>
        {/* END Images */}

        {/* Values */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
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
