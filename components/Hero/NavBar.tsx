import { useState } from 'react'

export default function NavBar() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <>
      {/* Main Header Section: With Mega Menu */}
      <div className='bg-orange-50 font-serif z-[99999]'>
        {/* Header */}
        <header
          id='page-header'
          className='flex flex-none items-center bg-orange-100 py-2'>
          <div className='relative container xl:max-w-7xl mx-auto px-4 lg:px-10'>
            <div className='flex items-center justify-center'>
              {/* Mega Menu visible on large screens */}
              <ul className='hidden lg:flex items-center'>
                <li className='group'>
                  {/* Solutions Link */}
                  <a
                    href='#'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:text-orange-500 text-gray-900 hover:text-gray-500'>
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
                  </a>
                  {/* END Solutions Link */}

                  {/* Solutions Menu */}
                  <div className='absolute top-8 right-10 left-10 pt-8 invisible group-hover:visible z-10'>
                    <div className='bg-white shadow-xl ring-1 ring-black ring-opacity-5 rounded-lg transform origin-top transition duration-300 ease-out opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 overflow-hidden'>
                      <div className='grid grid-cols-2 w-fit transform transition duration-500 ease-out opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100'>
                        <div className='p-8 space-y-6'>
                          <h4 className='text-xs uppercase font-semibold tracking-wider text-orange-800'>
                            Products
                          </h4>
                          <nav className='flex flex-col space-y-3'>
                            <a
                              href='#'
                              className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                              HTML Editor
                            </a>
                            <a
                              href='#'
                              className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                              CSS Editor
                            </a>
                            <a
                              href='#'
                              className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                              Web Page Builder
                            </a>
                            <a
                              href='#'
                              className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                              Animations Pack
                            </a>
                            <a
                              href='#'
                              className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                              3D Web Studio
                            </a>
                            <a
                              href='#'
                              className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                              Web Templates
                            </a>
                          </nav>
                        </div>
                        <div className='p-8 space-y-6'>
                          <h4 className='text-xs uppercase font-semibold tracking-wider text-orange-800'>
                            Features
                          </h4>
                          <nav className='flex flex-col space-y-3'>
                            <a
                              href='#'
                              className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                              Overview
                            </a>
                            <a
                              href='#'
                              className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                              Components
                            </a>
                            <a
                              href='#'
                              className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                              Media Libraries
                            </a>
                            <a
                              href='#'
                              className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                              Databases
                            </a>
                            <a
                              href='#'
                              className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                              Auto Backups
                            </a>
                            <a
                              href='#'
                              className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                              24/7 Phone Support
                            </a>
                          </nav>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* END Solutions Menu */}
                </li>
                {/* Developers Link */}
                <li className='group'>
                  <a
                    href='#'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:text-orange-500 text-gray-900 hover:text-gray-500'>
                    <span>Developers</span>
                  </a>
                </li>

                {/* Resources Link */}
                <li className='group'>
                  <a
                    href='#'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:text-orange-500 text-gray-900 hover:text-gray-500'>
                    <span>Resources</span>
                  </a>
                </li>
                {/* Pricing Link */}
                <li className='group'>
                  <a
                    href='#'
                    className='font-semibold inline-flex items-center space-x-1 h-8 px-4 group-hover:text-orange-500 text-gray-900 hover:text-gray-500'>
                    <span>Pricing</span>
                  </a>
                </li>
              </ul>
              {/* END Mega Menu visible on large screens */}
            </div>

            {/* Navigation on smaller screens */}
            <div className={`lg:hidden ${mobileNavOpen ? '' : 'hidden'}`}>
              <div className='grid grid-cols-1 sm:grid-cols-3 bg-gray-50 rounded-xl mt-5'>
                <div className='p-8 space-y-6'>
                  <h4 className='text-xs uppercase font-semibold tracking-wider text-orange-800'>
                    Solutions
                  </h4>
                  <nav className='flex flex-col space-y-3'>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      HTML Editor
                    </a>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      CSS Editor
                    </a>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      Web Page Builder
                    </a>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      Animations Pack
                    </a>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      3D Web Studio
                    </a>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      Web Templates
                    </a>
                  </nav>
                </div>
                <div className='p-8 space-y-6'>
                  <h4 className='text-xs uppercase font-semibold tracking-wider text-orange-800'>
                    Developers
                  </h4>
                  <nav className='flex flex-col space-y-3'>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      Overview
                    </a>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      Components
                    </a>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      Media Libraries
                    </a>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      Databases
                    </a>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      Auto Backups
                    </a>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      24/7 Phone Support
                    </a>
                  </nav>
                </div>
                <div className='p-8 space-y-6'>
                  <h4 className='text-xs uppercase font-semibold tracking-wider text-orange-800'>
                    Resources
                  </h4>
                  <nav className='flex flex-col space-y-3'>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      Resource Center
                    </a>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      Developer Docs
                    </a>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      User Guides
                    </a>
                  </nav>
                  <h4 className='text-xs uppercase font-semibold tracking-wider text-orange-800'>
                    More
                  </h4>
                  <nav className='flex flex-col space-y-3'>
                    <a
                      href='#'
                      className='text-gray-600 hover:text-orange-600 font-medium text-sm'>
                      Pricing
                    </a>
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
