export default function Features() {
  return (
    <>
      {/* Features Section: Featured Image Side */}
      <div className='overflow-hidden'>
        <div className='container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
          <div className='flex flex-col lg:flex-row lg:items-center space-y-12 lg:space-y-0 lg:space-x-28'>
            <div className='lg:w-1/2 xl:w-2/5 flex-none relative'>
              <img
                src='/product/production.jpg'
                alt='Preview Feature Image'
                className='relative mx-auto'
              />
            </div>
            <div className='lg:w-1/2 xl:w-3/5 md:py-12 space-y-10'>
              {/* Heading */}

              <div className='font-serif w-full'>
                <h2 className='text-3xl text-orange-950 md:text-4xl font-semibold mb-4'>
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
                <div className='flex space-x-4'>
                  <div className='flex-none'>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                      className='hi-solid hi-check-circle inline-block w-5 h-5 text-orange-900'>
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-serif font-semibold mb-2'>Quality</h4>
                    <p className='text-gray-800 font-light leading-relaxed'>
                      We have a rigorous quality control process in place to
                      ensure that all of our products meet or exceed your
                      expectations. We use only the highest quality materials
                      and employ skilled artisans to craft your garments.
                    </p>
                  </div>
                </div>
                <div className='flex space-x-4'>
                  <div className='flex-none'>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                      className='hi-solid hi-check-circle inline-block w-5 h-5 text-orange-900'>
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-serif font-semibold mb-2'>
                      Customization
                    </h4>
                    <p className='text-gray-800 font-light leading-relaxed'>
                      We offer a wide range of customization options to help you
                      create the perfect clothing line for your brand. Whether
                      you&apos;re looking for unique designs, custom sizes, or
                      personalized branding, we have the expertise to bring your
                      vision to life.
                    </p>
                  </div>
                </div>
                <div className='flex space-x-4'>
                  <div className='flex-none'>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                      className='hi-solid hi-check-circle inline-block w-5 h-5 text-orange-900'>
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-serif font-semibold mb-2'>Speed</h4>
                    <p className='text-gray-800 font-light leading-relaxed'>
                      We understand that time is money in the fashion industry,
                      which is why we prioritize fast turnaround times without
                      sacrificing quality. Our streamlined production process
                      allows us to deliver your products quickly and
                      efficiently.
                    </p>
                  </div>
                </div>

                <div className='flex space-x-4'>
                  <div className='flex-none'>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                      className='hi-solid hi-check-circle inline-block w-5 h-5 text-orange-900'>
                      <path
                        fillRule='evenodd'
                        d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className='text-lg font-serif font-semibold mb-2'>
                      Sustainability
                    </h4>
                    <p className='text-gray-800 font-light leading-relaxed'>
                      We are committed to sustainable and ethical manufacturing
                      practices. We prioritize eco-friendly materials and
                      production methods to reduce our environmental impact, and
                      we ensure fair labor practices throughout our supply
                      chain.
                    </p>
                  </div>
                </div>
                
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
