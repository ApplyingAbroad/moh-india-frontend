import NavBar from './NavBar'

export default function LogoBar() {
  return (
    <>
      <div className='bg-white'>
        {/* Header */}
        <header
          id='page-header'
          className='flex flex-none items-center bg-white py-5 lg:py-10'>
          <div className='relative container xl:max-w-7xl mx-auto px-4 lg:px-10'>
            <div className='flex items-center justify-center'>
              {/* Logo */}
              <a
                href='#'
                className='inline-flex items-center space-x-2 font-bold text-lg tracking-wide text-blue-600 hover:text-blue-400'>
                <img
                  src='/company/Header_logo_large.png'
                  alt=''
                  className=' hi-outline hi-cube-transparent inline-block h-20 md:h-32'
                />
              </a>
            </div>
          </div>
        </header>
      </div>
    </>
  )
}
