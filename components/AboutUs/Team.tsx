import Image from 'next/image'

const people = [
  {
    name: 'Dinesh Aggarwal',
    role: 'The Chairman/Mentor',
    imageUrl: '/team/Dinesh.webp',
  },
  {
    name: 'Nanak Singh Walia',
    role: 'The Visionary/Chief Strategist',
    imageUrl: '/team/Nanak.jpg',
  },
  {
    name: 'Samridhi Aggarwal',
    role: 'The Dreamer/Chief Creator',
    imageUrl: '/team/Sam.webp',
  },
  {
    name: 'Shruti Nair',
    role: 'The Thinker/Brand Strategist',
    imageUrl: '/team/Shruti.jpg',
  },
]

export default function Team() {
  return (
    <>
      {/* Team Section: Mini Photos with Grayscale Filter */}
      <div className='space-y-8 container xl:max-w-7xl mx-auto px-4 py-10 md:py-16 lg:px-8'>
        {/* Heading */}

        <div className=' mb-10 text-center mx-auto'>
          <h2 className='font-serif text-3xl text-black md:text-4xl font-semibold mb-4'>
            The Brains Behind the Brand
          </h2>
          <h3 className='text-lg font-light md:leading-relaxed'>
            A dedicated team committed to delivering high-quality tailoring
          </h3>
        </div>
        {/* END Heading */}

        {/* Team */}
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
          {people.map((person, index) => (
            <div key={index} className='relative group overflow-hidden'>
              <div className='aspect-w-1 aspect-h-1'>
                <Image
                  height={400}
                  width={400}
                  src={person.imageUrl}
                  alt='User Avatar'
                  className='transition grayscale group-hover:grayscale-0 group-hover:shadow-lg object-cover object-center'
                />
              </div>
              <div className='mt-3'>
                <h4 className='font-serif font-medium text-lg'>
                  {person.name}
                </h4>
                <p className='text-sm font-light '>{person.role}</p>
              </div>
            </div>
          ))}
        </div>
        {/* END Team */}
      </div>
      {/* END Team Section: Mini Photos with Grayscale Filter */}
    </>
  )
}
