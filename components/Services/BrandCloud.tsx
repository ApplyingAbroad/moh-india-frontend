export default function BrandCloud() {
  return (
    <>
      {/* Logos Section: Condensed with Grayscale Filter */}
      <div className='border-y border-gray-100'>
        <div className='container xl:max-w-7xl mx-auto px-4 py-8 lg:px-8'>
          <div className='grid grid-cols-2 lg:grid-cols-6 gap-2 text-center text-gray-400'>
            <div className='flex items-center justify-center'>
              <a
                href='#'
                className='py-2 inline-flex items-center space-x-2 text-lg transition grayscale hover:grayscale-0 active:opacity-50 font-semibold text-blue-500'>
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  className='hi-solid hi-cube inline-block w-5 h-5 text-blue-300'>
                  <path d='M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z' />
                </svg>
                <span>boxspot</span>
              </a>
            </div>
            <div className='flex items-center justify-center'>
              <a
                href='#'
                className='py-2 inline-flex items-center space-x-2 text-lg transition grayscale hover:grayscale-0 active:opacity-50 font-light text-indigo-500'>
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  className='hi-solid hi-code inline-block w-5 h-5 text-indigo-300'>
                  <path
                    fillRule='evenodd'
                    d='M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>TechCode</span>
              </a>
            </div>
            <div className='flex items-center justify-center'>
              <a
                href='#'
                className='py-2 inline-flex items-center space-x-2 text-lg transition grayscale hover:grayscale-0 active:opacity-50 font-bold text-purple-500'>
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  className='hi-solid hi-cursor-click inline-block w-5 h-5 text-purple-300'>
                  <path
                    fillRule='evenodd'
                    d='M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>cCLICK</span>
              </a>
            </div>
            <div className='flex items-center justify-center'>
              <a
                href='#'
                className='py-2 inline-flex items-center space-x-2 text-lg transition grayscale hover:grayscale-0 active:opacity-50 text-orange-500'>
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  className='hi-solid hi-variable inline-block w-5 h-5 text-orange-300'>
                  <path
                    fillRule='evenodd'
                    d='M4.649 3.084A1 1 0 015.163 4.4 13.95 13.95 0 004 10c0 1.993.416 3.886 1.164 5.6a1 1 0 01-1.832.8A15.95 15.95 0 012 10c0-2.274.475-4.44 1.332-6.4a1 1 0 011.317-.516zM12.96 7a3 3 0 00-2.342 1.126l-.328.41-.111-.279A2 2 0 008.323 7H8a1 1 0 000 2h.323l.532 1.33-1.035 1.295a1 1 0 01-.781.375H7a1 1 0 100 2h.039a3 3 0 002.342-1.126l.328-.41.111.279A2 2 0 0011.677 14H12a1 1 0 100-2h-.323l-.532-1.33 1.035-1.295A1 1 0 0112.961 9H13a1 1 0 100-2h-.039zm1.874-2.6a1 1 0 011.833-.8A15.95 15.95 0 0118 10c0 2.274-.475 4.44-1.332 6.4a1 1 0 11-1.832-.8A13.949 13.949 0 0016 10c0-1.993-.416-3.886-1.165-5.6z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>sBoard</span>
              </a>
            </div>
            <div className='flex items-center justify-center'>
              <a
                href='#'
                className='py-2 inline-flex items-center space-x-2 text-lg transition grayscale hover:grayscale-0 active:opacity-50 font-semibold text-pink-500'>
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  className='hi-solid hi-truck inline-block w-5 h-5 text-pink-300'>
                  <path d='M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z' />
                  <path d='M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z' />
                </svg>
                <span>uptruck</span>
              </a>
            </div>
            <div className='flex items-center justify-center'>
              <a
                href='#'
                className='py-2 inline-flex items-center space-x-2 text-lg transition grayscale hover:grayscale-0 active:opacity-50 text-rose-500'>
                <svg
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                  className='hi-solid hi-location-marker inline-block w-5 h-5 text-rose-300'>
                  <path
                    fillRule='evenodd'
                    d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>freshloc</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* END Logos Section: Condensed with Grayscale Filter */}
    </>
  )
}
