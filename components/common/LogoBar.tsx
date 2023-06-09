import Image from 'next/image'
import Link from 'next/link'

export default function LogoBar() {
  return (
    <>
      <div>
        {/* Header */}
        <header
          id='page-header'
          className='flex flex-none items-center py-5 lg:py-10'>
          <div className='relative container xl:max-w-7xl mx-auto px-4 lg:px-10'>
            <div className='flex items-center justify-center'>
              {/* Logo */}
              <Link
                href='/'
                className='inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-blue-600 hover:text-blue-400'>
                <Image
                  height={500}
                  width={500}
                  src='/company/moh-india-logo.png'
                  alt='tailor and company logo'
                  className='inline-block h-36 md:h-44 object-contain'
                />
              </Link>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
