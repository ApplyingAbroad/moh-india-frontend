import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'

export default function ContactSplit() {
  return (
    <>
      {/* Contact Section: Split */}
      <div className='relative bg-beige-50 flex items-center overflow-hidden h-full'>
        <div className='absolute top-0 right-0 bottom-0 w-full lg:w-1/2 bg-beige-50' />
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
                <div className='text-sm uppercase text-stone-500 tracking-wider mb-1'>
                  We reply in 24hrs
                </div>
                <h2 className='font-serif text-3xl md:text-4xl font-semibold mb-4 text-black'>
                  Get in touch
                </h2>
                <h3 className='font-sans text-lg md:leading-relaxed text-black/60'>
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
                      className='block  placeholder-gray-400 px-5 py-3 leading-6 w-full  ring-1 ring-stone-400 border-none focus:ring focus:ring-amber-500 focus:ring-opacity-50'
                      type='text'
                      id='firstname'
                      name='firstname'
                      placeholder='John'
                    />
                  </div>
                  <div className='space-y-1'>
                    <label
                      htmlFor='lastname'
                      className='font-serif font-medium'>
                      Last Name
                    </label>
                    <input
                      className='block placeholder-gray-400 px-5 py-3 leading-6 w-full  ring-1 ring-stone-400 border-none focus:ring focus:ring-amber-500 focus:ring-opacity-50'
                      type='text'
                      id='lastname'
                      name='lastname'
                      placeholder='Doe'
                    />
                  </div>
                </div>
                <div className='space-y-1'>
                  <label htmlFor='email' className='font-serif font-medium'>
                    Email
                  </label>
                  <input
                    className='block  placeholder-gray-400 px-5 py-3 leading-6 w-full  ring-1 ring-stone-400 border-none focus:ring focus:ring-amber-500 focus:ring-opacity-50'
                    type='email'
                    id='email'
                    name='email'
                    placeholder='mail@company.com'
                  />
                </div>
                <div className='space-y-1'>
                  <label htmlFor='message' className='font-serif font-medium'>
                    Message
                  </label>
                  <textarea
                    className='block ring-1 ring-stone-400 border-none placeholder-gray-400 px-5 py-3 w-full focus:ring focus:ring-amber-500 focus:ring-opacity-50 resize-none'
                    id='message'
                    name='message'
                    rows={6}
                    defaultValue={''}
                    placeholder='Your message here...'
                  />
                </div>
                <button
                  type='button'
                  className='font-serif inline-flex justify-center items-center space-x-2  font-semibold rounded-none px-6 py-3 leading-6  ring-1 ring-black ring-opacity-40 hover:ring-opacity-100 border-none text-black text-lg transition-all'>
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
