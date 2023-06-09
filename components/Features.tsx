import Image from 'next/image'

const features = [
  {
    title: 'Unparalleled Craftsmanship',
    description:
      'Our skilled artisans blend traditional techniques with modern design to create exceptional garments with meticulous attention to detail.',
  },
  {
    title: 'Bespoke Tailoring',
    description:
      'Each garment is meticulously crafted to your measurements, preferences, and specifications for a perfect fit that reflects your individuality.',
  },
  {
    title: 'Luxury Fabrics',
    description:
      'We source the finest fabrics worldwide, ensuring your garments not only look exceptional but also stand the test of time.',
  },
  {
    title: 'Attention to Detail',
    description:
      'From intricate embellishments to precise patterns, we leave no stone unturned in creating garments of impeccable quality.',
  },
  {
    title: 'Customer-Centric Approach',
    description:
      'We prioritize your satisfaction through attentive service, open communication, and delivering a tailored experience that exceeds your expectations.',
  },
  {
    title: 'One-Stop Solution',
    description:
      'From sampling to production, stitching, and finishing, we offer comprehensive services to fulfill your garment needs with expertise and reliability.',
  },
]

export default function Features() {
  return (
    <>
      {/* Features Section: Featured Image Side */}
      <div className='overflow-hidden'>
        <div className='container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
          <div className='flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-28'>
            <div className='lg:w-1/2 xl:w-2/5 flex-none relative'>
              <Image
                height={600}
                width={500}
                src='/product/production.jpg'
                alt='Preview Feature Image'
                className='relative mx-auto'
              />
            </div>
            <div className='lg:w-1/2 xl:w-3/5 md:py-12 space-y-10'>
              {/* Heading */}

              <div className='font-serif w-full'>
                <h2 className='text-3xl text-black md:text-4xl font-semibold mb-4'>
                  Why <span className='font-light'>Choose us?</span>
                </h2>
                <h3 className='text-lg md:leading-relaxed text-gray-600'>
                  Discover the Benefits of Partnering with Our Full-Service
                  Factory
                </h3>
              </div>
              {/* END Heading */}

              {/* Features */}
              <div className='space-y-5'>
                {features.map((feature, index) => (
                  <div key={index} className='flex space-x-4'>
                    <div className='flex-none'>
                      <CheckMark />
                    </div>
                    <div>
                      <h4 className='text-lg font-serif font-semibold mb-2'>
                        {feature.title}
                      </h4>
                      <p className='text-gray-800 font-light leading-relaxed'>
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              {/* END Features */}
            </div>
          </div>
        </div>
      </div>
      {/* END Features Section: Featured Image Side */}
    </>
  )
}

const CheckMark = () => {
  return (
    <>
      <svg
        fill='currentColor'
        viewBox='0 0 20 20'
        xmlns='http://www.w3.org/2000/svg'
        className='hi-solid hi-check-circle inline-block w-5 h-5 text-black'>
        <path
          fillRule='evenodd'
          d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
          clipRule='evenodd'
        />
      </svg>
    </>
  )
}
