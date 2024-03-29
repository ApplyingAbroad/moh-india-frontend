import urlFor from '@/lib/imageUrlBuilder'
import { Service } from '@components/common/NavBar'
import Image from 'next/image'
import { toHTML } from '@portabletext/to-html'
import { Interweave } from 'interweave'
type data = Service[]

export default function ServicePage({ data }: { data: data }) {
  console.log(data)
  return (
    <>
      <div className='space-y-16 container mx-auto px-4 py-10'>
        {/* Heading */}
        <div className='text-center'>
          {/* <div className='text-sm uppercase font-bold tracking-wider mb-1 text-orange-700'>
            Service
          </div> */}
          <h2 className='font-serif text-3xl md:text-4xl font-extrabold mb-4 capitalize'>
            {data[0]?.title}
          </h2>
        </div>
        {/* END Heading */}

        {/* Blog Post */}
        <article className='max-w-5xl mx-auto'>
          <div role='img' className='relative h-96 w-full'>
            <Image
              src={
                data[0]?.image &&
                urlFor(data[0]?.image)
                  .ignoreImageParams()
                  .width(800)
                  .quality(60)
                  .url()
              }
              fill
              alt={data[0]?.title}
              className='object-cover object-center'
            />
          </div>
          {/* <BrandCloud /> */}
          <article className='prose prose-orange md:prose-lg mx-auto mt-8'>
            <Interweave content={toHTML(data[0]?.content)} />
          </article>
        </article>
        {/* END Blog Post */}
      </div>
    </>
  )
}
