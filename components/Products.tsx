export default function Products() {
  return (
    <>
      {/* Product List Section: Products Grid */}
      <div className='bg-white    '>
        <div className='container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32'>
          {/* Filters */}
          <div className='font-serif mb-10'>
            <h2 className='text-3xl text-orange-950 md:text-4xl font-semibold mb-4'>
              Our <span className='font-light'>Products</span>
            </h2>
            <h3 className='text-lg md:leading-relaxed lg:w-1/2 text-gray-600'>
              A passionate team who are here to help you code and build your
              business using powerful tools.
            </h3>
          </div>
          {/* END Filters */}

          {/* Products */}
          <div className='font-sans grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-8'>
            <div>
              <div className='group relative overflow-hidden mb-2'>
                <img
                  src='https://cdn.tailkit.com/media/placeholders/photo-2cFZ_FB08UM-600x600.jpg'
                  alt='Product Image'
                  className='h-full'
                />
              </div>
              <a href='#' className='block hover:text-gray-500  '>
                Amazing Smart Watch
              </a>
            </div>
            <div>
              <div className='group relative overflow-hidden mb-2'>
                <img
                  src='https://cdn.tailkit.com/media/placeholders/photo-KStSiM1UvPw-600x600.jpg'
                  alt='Product Image'
                />
              </div>
              <a href='#' className='block hover:text-gray-500  '>
                Modern Shoes
              </a>
            </div>
            <div>
              <div className='group relative overflow-hidden mb-2'>
                <img
                  src='https://cdn.tailkit.com/media/placeholders/photo-K62u25Jk6vo-600x600.jpg'
                  alt='Product Image'
                />
              </div>
              <a href='#' className='block hover:text-gray-500  '>
                Cool Sunglasses
              </a>
            </div>
            <div>
              <div className='group relative overflow-hidden mb-2'>
                <img
                  src='https://cdn.tailkit.com/media/placeholders/photo-LxVxPA1LOVM-600x600.jpg'
                  alt='Product Image'
                />
              </div>
              <a href='#' className='block hover:text-gray-500  '>
                Sneakers
              </a>
            </div>
            <div>
              <div className='group relative overflow-hidden mb-2'>
                <img
                  src='https://cdn.tailkit.com/media/placeholders/photo-NuOGFo4PudE-600x600.jpg'
                  alt='Product Image'
                />
              </div>
              <a href='#' className='block hover:text-gray-500  '>
                Bluetooth headphones
              </a>
            </div>
            <div>
              <div className='group relative overflow-hidden mb-2'>
                <img
                  src='https://cdn.tailkit.com/media/placeholders/photo-KsLPTsYaqIQ-600x600.jpg'
                  alt='Product Image'
                />
              </div>
              <a href='#' className='block hover:text-gray-500  '>
                Retro Camera
              </a>
            </div>
          </div>
          {/* END Products */}
        </div>
      </div>
      {/* END Product List Section: Products Grid */}
    </>
  )
}
