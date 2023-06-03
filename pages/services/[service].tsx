import CTA from '@/components/common/CTA'
import { Service } from '@/components/common/NavBar'
import ServiceTestimonials from '@/components/Home/Services/ServiceTestimonials'
import ServicePage from '@/components/Home/Services/SingleService'
import { getClient } from '@/lib/sanity'
import { groq } from 'next-sanity'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import MasterLayout from '../_layout'
import { capitalizeWords } from '@/lib/utils'
const ServicePageQuery = groq`
*[_type == "service" && title == $service] {
    _id,
    slug,
    title,
    description,
    image,
    content,
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
      <MasterLayout title={capitalizeWords(data[0]?.title)}>
        <ServicePage data={data} />
        <ServiceTestimonials />
        <CTA />
      </MasterLayout>
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
