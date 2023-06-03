import { useEffect, useState } from 'react'
import Link from 'next/link'
import { getClient } from '@/lib/sanity'
import { groq } from 'next-sanity'
import { slugify } from '@/lib/utils'

const navLinksQuery = groq`
  *[_type == "service"] {
    _id,
    title,
  }
`

export type Service = {
  _id: string
  title: string
  slug?: string
  description?: string
  image?: any
  content: []
}

const NavBar = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [services, setServices] = useState<Service[]>([])

  useEffect(() => {
    const getServices = async () => {
      const services: Service[] = await getClient(false).fetch(navLinksQuery)
      setServices(services)
    }
    getServices()
  }, [])

  return (
    <>
      {/* Main Header Section: With Mega Menu */}
      <div className='bg-beige-50 font-serif sticky top-0 z-[99999]'>
        {/* Header */}
        <header
          id='page-header'
          className='flex flex-col flex-none items-center bg-beige-100 py-2'>
          <div
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className='text-center flex gap-5 justify-center items-center w-full py-2 lg:hidden'>
            <svg
              className='hi-mini hi-bars-3 inline-block w-5 h-5'
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 20 20'
              fill='currentColor'
              aria-hidden='true'>
              <path
                fillRule='evenodd'
                d='M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10zm0 5.25a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75a.75.75 0 01-.75-.75z'
                clipRule='evenodd'
              />
            </svg>{' '}
            <p>Menu</p>
          </div>
          <div className='relative container xl:max-w-7xl mx-auto px-4 lg:px-10'>
            <div className='flex items-center justify-center'>
              {/* Mega Menu visible on large screens */}
              <ul className='hidden lg:flex items-center'>
                <li className='group'>
                  <Link
                    href='/'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:underline underline-offset-4 text-black'>
                    <span>Home</span>
                  </Link>
                </li>
                <li className='group'>
                  <Link
                    href='/about-us'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:underline underline-offset-4 text-black'>
                    <span>About Us</span>
                  </Link>
                </li>
                <li className='group'>
                  <Link
                    href='/our-ethics'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:underline underline-offset-4 text-black'>
                    <span>Our Ethics</span>
                  </Link>
                </li>

                <li className='group'>
                  {/* Services Link */}
                  <Link
                    href='/services'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:underline underline-offset-4 text-black'>
                    <span>Services</span>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                      className='opacity-50 transform transition duration-200 ease-out group-hover:rotate-180 hi-solid hi-chevron-down inline-block w-4 h-4'>
                      <path
                        fillRule='evenodd'
                        d='M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </Link>

                  <div className='absolute top-2 pt-8 invisible group-hover:visible z-10'>
                    <div className='bg-white shadow-xl ring-1 ring-black ring-opacity-5 rounded-lg transform origin-top transition duration-300 ease-out opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 overflow-hidden'>
                      <div className='w-fit transform transition duration-500 ease-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100'>
                        <div className='p-4 space-y-6'>
                          <nav className='font-sans flex flex-col space-y-3'>
                            {services?.map((service: any) => (
                              <Link
                                key={service._id}
                                href={`/services/${slugify(service.title)}`}
                                className='text-gray-600 hover:underline underline-offset-4 font-medium text-sm capitalize'>
                                {service.title}
                              </Link>
                            ))}
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                {/* <li className='group'>
                  <Link
                    href='/gallery'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:underline underline-offset-4 text-black'>
                    <span>Gallery</span>
                  </Link>
                </li> */}
                <li className='group'>
                  <Link
                    href='/contact'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:underline underline-offset-4 text-black'>
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Navigation on smaller screens */}

            <div className={`lg:hidden ${mobileNavOpen ? '' : 'hidden'}`}>
              <div className='bg-gray-50 rounded-xl mt-5'>
                <div className='p-8 space-y-6'>
                  <nav className='flex flex-col space-y-3'>
                    <Link
                      href='/'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      <h4 className='font-semibold text-black'>Home</h4>
                    </Link>
                    <Link
                      href='/about-us'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      <h4 className='font-semibold text-black'>About us</h4>
                    </Link>
                    <Link
                      href='/our-ethics'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      <h4 className='font-semibold text-black'>Our Ethics</h4>
                    </Link>

                    <h4 className='text-sm font-semibold text-black'>
                      <Link href='/services'>Services</Link>
                    </h4>
                    <nav className='flex flex-col space-y-3 pl-3'>
                      {services?.map((service: any) => (
                        <Link
                          key={service._id}
                          href={`/services/${slugify(service.title)}`}
                          className='font-sans text-sm text-gray-600 hover:text-orange-600 font-medium capitalize'>
                          {service.title}
                        </Link>
                      ))}
                    </nav>

                    {/* <Link
                      href='/gallery'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      <h4 className='font-semibold text-black'>gallery</h4>
                    </Link> */}
                    <Link
                      href='/contact'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      <h4 className='font-semibold text-black'>Contact Us</h4>
                    </Link>
                  </nav>
                </div>
              </div>
            </div>
            {/* Navigation on smaller screens */}
          </div>
        </header>
      </div>
      {/* END Main Header Section: With Mega Menu */}
    </>
  )
}

export default NavBar
