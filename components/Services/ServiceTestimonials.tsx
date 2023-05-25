const testimonials = [
  {
    id: 1,
    quote:
      "I've had the pleasure of partnering with the textile manufacturing company for our clothing production needs. Their end-to-end experience is unmatched, and their full-service manufacturing factory ensures a seamless production process. I highly recommend their services.",
    name: 'Amita Patel',
    position: 'Fashion Designer',
  },
  {
    id: 2,
    quote:
      "As a boutique clothing brand owner, I've had the privilege of working with the textile manufacturing company. Their expertise in providing an end-to-end clothing production experience is impressive. Their full-service manufacturing factory has helped me bring my designs to life efficiently. I highly endorse their services.",
    name: 'Rajesh Sharma',
    position: 'Fashion Brand Owner',
  },
  {
    id: 3,
    quote:
      'Being a fashion startup, finding a reliable manufacturing partner was crucial. The textile manufacturing company exceeded my expectations with their end-to-end clothing production experience. From concept to delivery, their full-service manufacturing factory provided exceptional support. I wholeheartedly recommend their services.',
    name: 'Neha Gupta',
    position: 'Fashion Entrepreneur',
  },
  {
    id: 4,
    quote:
      "I've collaborated with the textile manufacturing company for several seasons, and their commitment to delivering a seamless end-to-end clothing production experience is commendable. Their full-service manufacturing factory ensures top-notch quality and timely production. I highly vouch for their services.",
    name: 'Vikram Singh',
    position: 'Fashion Retailer',
  },
]

export default function ServiceTestimonials() {
  return (
    <>
      <div className='container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16'>
          {testimonials.map((testimonial) => (
            <>
              <blockquote>
                <p className='relative bg-beige-100 font-medium leading-7 text-gray-700 pl-6 pr-10 py-6 md:p-10 mb-5'>
                  <span className='absolute inline-block top-0 right-0 text-6xl mt-2 mr-4 text-orange-200 font-serif'>
                    “
                  </span>{' '}
                  <span className='absolute inline-block bottom-0 left-6 translate-y-1/2 rotate-45 w-4 h-4 bg-beige-100' />
                  <span className='relative'>{testimonial.quote}</span>
                </p>
                <div className=' ml-2'>
                  <p className='font-serif text-black font-semibold'>
                    {testimonial.name}
                  </p>
                  <p className='text-gray-500 font-medium text-sm'>
                    {testimonial.position}
                  </p>
                </div>
              </blockquote>
            </>
          ))}
        </div>
      </div>
    </>
  )
}
