export default function CTA() {
  return (
    <>
      {/* CTA Section: Simple Box Dark With Shapes */}
      <div className='bg-white overflow-hidden'>
        <div className='container xl:max-w-6xl mx-auto px-4 py-16 lg:px-8 lg:py-32 relative'>
          <div className='absolute inset-0 -mx-2 my-6 lg:my-20 bg-orange-100 -skew-y-1 rotate-2 rounded' />
          <div className='absolute top-3 lg:top-14 left-6 lg:left-6 bg-orange-400 w-12 h-12 -skew-y-3 rotate-45 rounded-full' />
          <div className='absolute top-2 lg:top-12 -left-6 bg-orange-600 w-16 h-16 -skew-y-3 rotate-45 rounded-3xl' />
          <div className='flex items-center flex-col md:flex-row relative space-y-8 md:space-y-0'>
            {/* Heading */}
            <div className='md:w-7/12 py-5 md:p-5 text-center md:text-left font-serif'>
              <h2 className='text-3xl md:text-4xl font-extrabold mb-4 text-orange-950'>
                Start your online business
              </h2>
              <h3 className='text-lg text-orange-900/90'>
                Get your own custom dashboard and start building amazing
                services. Inspiring results from day one without the pain.
              </h3>
            </div>
            {/* END Heading */}

            {/* Actions */}
            <div className='grow md:p-5 md:text-center font-serif'>
              <a
                className='text-lg lg:text-2xl mt-5 font-medium text-orange-800 hover:text-orange-600'
                href='#'>
                Contact us now &rarr;
              </a>
            </div>
            {/* END Actions */}
          </div>
        </div>
      </div>
      {/* END CTA Section: Simple Box Dark With Shapes */}
    </>
  )
}
