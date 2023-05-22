import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function ContactSplit() {
  return (
    <>
      {/* Contact Section: Split */}
      <div className='relative bg-orange-50 flex items-center overflow-hidden h-full'>
        <div className='absolute top-0 right-0 bottom-0 w-full lg:w-1/2 bg-orange-50' />
        <div className='relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
          <Link
            href='/'
            className='inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-blue-600 hover:text-blue-400'>
            <img
              src='/company/Logo_black.svg'
              alt=''
              className='lg:px-14 hi-outline hi-cube-transparent inline-block h-16 mb-10'
            />
          </Link>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0'>
            {/* Heading */}
            <div className='flex items-center lg:px-14 space-y-6'>
              <div className='w-full'>
                <div className='text-sm uppercase font-bold tracking-wider mb-1 text-orange-800'>
                  We reply in 24hrs
                </div>
                <h2 className='font-serif text-3xl md:text-4xl font-semibold mb-4 text-orange-950'>
                  Get in touch
                </h2>
                <h3 className='font-sans text-lg md:leading-relaxed text-orange-950/60'>
                  If something does not make sense, feel free to contact us and
                  we will get back to you as soon as possible.
                </h3>
                <h4 className='uppercase text-sm font-semibold tracking-wider mt-12 mb-2'>
                  Company Inc.
                </h4>
                <div className='leading-relaxed'>
                  1080 Sunshine Valley, Suite 2563
                  <br />
                  San Francisco, CA 85214
                  <br />
                  <abbr title='Phone'>P:</abbr> (123) 456-7890
                </div>
              </div>
            </div>
            {/* END Heading */}

            {/* Contact Form */}
            <div className='flex items-center lg:px-14 xl:px-20'>
              <form className='space-y-6 w-full'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div className='space-y-1'>
                    <label
                      htmlFor='firstname'
                      className='font-serif font-medium'>
                      First Name
                    </label>
                    <input
                      className='block border placeholder-gray-400 px-5 py-3 leading-6 w-full border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50'
                      type='text'
                      id='firstname'
                      name='firstname'
                    />
                  </div>
                  <div className='space-y-1'>
                    <label
                      htmlFor='lastname'
                      className='font-serif font-medium'>
                      Last Name
                    </label>
                    <input
                      className='block border placeholder-gray-400 px-5 py-3 leading-6 w-full border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50'
                      type='text'
                      id='lastname'
                      name='lastname'
                    />
                  </div>
                </div>
                <div className='space-y-1'>
                  <label htmlFor='email' className='font-serif font-medium'>
                    Email
                  </label>
                  <input
                    className='block border placeholder-gray-400 px-5 py-3 leading-6 w-full border-orange-200 focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50'
                    type='email'
                    id='email'
                    name='email'
                  />
                </div>
                <div className='space-y-1'>
                  <label htmlFor='message' className='font-serif font-medium'>
                    Message
                  </label>
                  <textarea
                    className='block border border-orange-200 placeholder-gray-400 px-5 py-3 w-full focus:border-orange-500 focus:ring focus:ring-orange-500 focus:ring-opacity-50 resize-none'
                    id='message'
                    name='message'
                    rows={6}
                    defaultValue={''}
                  />
                </div>
                <button
                  type='button'
                  className='font-serif inline-flex justify-center items-center space-x-2 border font-semibold rounded-none px-6 py-3 leading-6 border-orange-200 bg-orange-100 text-orange-900 hover:border-orange-300 hover:text-orange-950 hover:shadow-sm focus:ring focus:ring-orange-300 focus:ring-opacity-25 active:border-orange-200 active:shadow-none text-lg'>
                  <span>Send Message</span>
                  <PaperAirplaneIcon className='w-5 h-5' />
                </button>
              </form>
            </div>
            {/* END Contact Form */}
          </div>
        </div>
      </div>
      {/* END Contact Section: Split */}
    </>
  )
}
