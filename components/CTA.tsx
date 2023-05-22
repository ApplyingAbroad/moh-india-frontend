import Link from 'next/link'

export default function CTA() {
  return (
    <>
      {/* CTA Section: Simple Box Dark With Shapes */}
      <div className='overflow-hidden'>
        <div className='container xl:max-w-6xl mx-auto px-4 py-16 lg:px-8 lg:py-32 relative'>
          <div className='absolute inset-0 -mx-2 my-6 lg:my-20 bg-orange-100 -skew-y-1 rotate-2 rounded' />
          <div className='absolute top-3 lg:top-14 left-6 lg:left-6 ring-2 ring-orange-800 bg-orange-100 w-12 h-12 -skew-y-3 rotate-45 rounded-full' />
          <div className='absolute top-2 lg:top-12 -left-6 bg-orange-950 w-16 h-16 -skew-y-3 rotate-45 rounded-3xl' />
          <div className='flex items-center flex-col md:flex-row relative space-y-8 md:space-y-0'>
            {/* Heading */}
            <div className='md:w-7/12 py-5 md:p-5 text-center md:text-left font-serif'>
              <h2 className='text-3xl md:text-4xl font-semibold mb-4 text-orange-950'>
                Ready to take your clothing line to the next level?
              </h2>
              <h3 className='text-lg text-orange-950 font-sans font-light'>
                Contact us now to schedule a consultation with our team and
                learn more about our full-service clothing manufacturing
                capabilities.
              </h3>
            </div>
            {/* END Heading */}

            {/* Actions */}
            <div className='grow md:p-5 md:text-center font-serif'>
              <Link
                href='/contact'
                className='text-lg lg:text-2xl mt-5 font-medium text-orange-800 hover:text-orange-600'>
                Contact us now &rarr;
              </Link>
            </div>
            {/* END Actions */}
          </div>
        </div>
      </div>
      {/* END CTA Section: Simple Box Dark With Shapes */}
    </>
  )
}
