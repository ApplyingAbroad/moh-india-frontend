import Link from 'next/link'
import { Service } from '../../common/NavBar'
import { useEffect, useState } from 'react'
import { groq } from 'next-sanity'
import { getClient } from '@/lib/sanity'
import urlFor from '@/lib/imageUrlBuilder'
import { slugify } from '@/lib/utils'
import Image from 'next/image'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline'

const ServicesPageQuery = groq`
*[_type == "service"] {
  _id,
  title,
  description,
  image,
}
`

export default function Services({ showAll }: { showAll: boolean }) {
  const [complete, setComplete] = useState<boolean>(showAll)
  const [services, setServices] = useState<Service[]>([])
  useEffect(() => {
    const getServices = async () => {
      const services: Service[] = await getClient(false).fetch(
        ServicesPageQuery
      )
      // randomize the order of the services
      // localStorage.setItem('services', JSON.stringify(services))
      // services.sort(() => Math.random() - 0.5)
      // console.log(services)

      setServices(services)
    }

    try {
      getServices()
    } catch (err) {
      const services = JSON.parse(localStorage.getItem('services') || '[]')
      console.log(err)
      setServices(services)
    }
  }, [])

  return (
    <>
      <>
        <div className='space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-24'>
          <div className='font-serif mb-10'>
            <h2 className='text-3xl text-black font-medium md:text-4xl mb-4'>
              We offer a wide range of services
            </h2>
            <h3 className='text-lg md:leading-relaxed lg:w-1/2 text-gray-600'>
              We offer a wide range of services to help you achieve your goals.
            </h3>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            {/* Main card */}

            {/* <div className='flex flex-col lg:flex-row lg:col-span-4'>
              <div className='lg:w-8/12'>
                <Link
                  href={`/services/${slugify(services[0]?.title)}`}
                  className='flex justify-center items-center h-80 relative group overflow-hidden'>
                  <div className='flex items-center justify-center absolute inset-0 bg-orange-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100'>
                    <svg
                      fill='currentColor'
                      viewBox='0 0 20 20'
                      xmlns='http://www.w3.org/2000/svg'
                      className='text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10'>
                      <path
                        fillRule='evenodd'
                        d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </div>
                  <div role='img' className='relative h-96 w-full'>
                    <Image
                      src={
                        services[0]?.image
                          ? urlFor(services[0]?.image)
                              .ignoreImageParams()
                              .width(800)
                              .quality(60)
                              .url()
                          : '/product/backlook.jpg'
                      }
                      fill
                      className='object-cover'
                      alt=''
                    />
                  </div>
                </Link>
              </div>
              <div className='w-full lg:w-4/12 lg:pl-6 mt-4 lg:mt-0'>
                <h4 className='font-serif text-lg sm:text-xl lg:text-3xl mb-2'>
                  <Link
                    href={`/services/${slugify(services[0]?.title)}`}
                    className=' text-black hover:text-black capitalize'>
                    {services[0]?.title}
                  </Link>
                </h4>
                <p className='prose prose-indigo line-clamp-5'>
                  {services[0]?.description}
                </p>
              </div>
            </div> */}

            {/* lower card */}
            {services
              .slice(0, complete ? services.length : 4)
              .map((service) => {
            return  (
                <div key={service._id} className='flex flex-col'>
                  <Link
                    href={`/services/${slugify(service.title)}`}
                    className='flex justify-center items-center bg-orange-200 relative group  overflow-hidden h-80'>
                    <div className='flex items-center justify-center absolute inset-0 bg-orange-700 bg-opacity-75 opacity-0 transition ease-out duration-150 group-hover:opacity-100'>
                      <svg
                        fill='currentColor'
                        viewBox='0 0 20 20'
                        xmlns='http://www.w3.org/2000/svg'
                        className='text-white transform -rotate-45 hi-solid hi-arrow-right inline-block w-10 h-10'>
                        <path
                          fillRule='evenodd'
                          d='M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z'
                          clipRule='evenodd'
                        />
                      </svg>
                    </div>

                    <div role='img' className='relative h-full w-full'>
                      <Image
                        src={
                            service?.image&&
                          urlFor( service?.image)
                            ?.ignoreImageParams()
                            ?.width(600)
                            ?.quality(60)
                            ?.url() ?? '/product/backlook.jpg'
                        }
                        fill
                        className='object-cover'
                        alt=''
                      />
                    </div>
                  </Link>

                  <h4 className='font-serif font-semibold text-lg sm:text-xl mt-4 mb-2'>
                    <Link
                      href={`/services/${slugify(service.title)}`}
                      className='leading-7 text-black hover:text-black line-clamp-1 capitalize'>
                      {service.title}
                    </Link>
                  </h4>
                  <p className='prose prose-indigo text-gray-500/90 line-clamp-5'>
                    {service.description}
                  </p>
                </div>
              )
                    })}
            <button
              onClick={() => setComplete(!complete)}
              className='col-span-2 text-orange-700 hover:text-orange-600 font-medium text-lg'>
              {complete ? (
                <>
                  Show less
                  <ChevronUpIcon className='ml-2 w-5 h-5 inline-block' />
                </>
              ) : (
                <>
                  Show more
                  <ChevronDownIcon className='ml-2 w-5 h-5 inline-block' />
                </>
              )}
            </button>
          </div>
        </div>
      </>
    </>
  )
}
