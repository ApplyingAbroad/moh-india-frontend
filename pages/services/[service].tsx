import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import LogoBar from '@/components/Hero/LogoBar'
import NavBar, { Service } from '@/components/Hero/NavBar'
import ServiceTestimonials from '@/components/Services/ServiceTestimonials'
import ServicePage from '@/components/Services/SingleService'
import { getClient } from '@/lib/sanity'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
const ServicePageQuery = groq`
*[_type == "service" && title == $service] {
    _id,
    slug,
    title,
    description,
    image,
    }
`

const SingleServicePage = () => {
  const router = useRouter()
  const { service } = router.query
  const [data, setData] = useState<Service[]>([] as Service[])
  useEffect(() => {
    const getService = async () => {
      const serviceData: Service[] = await getClient(false).fetch(
        ServicePageQuery,
        {
          service: `${service?.toString().toLowerCase().replace(/-/g, ' ')}`,
        }
      )
      setData(serviceData)
    }
    getService()
  }, [service])

  return (
    <>
      <main className='bg-orange-50'>
        <NavBar />
        <LogoBar />
        <ServicePage data={data} />
        <ServiceTestimonials />
        <CTA />
        <Footer />
      </main>
    </>
  )
}

export default SingleServicePage

//  src={
//           data[0]?.image
//             ? urlFor(data[0]?.image)
//                 ?.ignoreImageParams()
//                 ?.width(300)
//                 ?.quality(70)
//                 ?.url()
//             : ''
//         }
