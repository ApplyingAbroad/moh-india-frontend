import urlFor from '@/lib/imageUrlBuilder'
import { Service } from '../Hero/NavBar'

type data = Service[]

export default function ServicePage({ data }: { data: data }) {
  return (
    <>
      <div className='space-y-16 container xl:max-w-7xl mx-auto px-4 py-10'>
        {/* Heading */}
        <div className='text-center'>
          <div className='text-sm uppercase font-bold tracking-wider mb-1 text-orange-700'>
            Service
          </div>
          <h2 className='font-serif text-3xl md:text-4xl font-extrabold mb-4 capitalize'>
            {data[0]?.title}
          </h2>
        </div>
        {/* END Heading */}

        {/* Blog Post */}
        <article className='prose prose-indigo prose-lg mx-auto'>
          <img
            src={
              data[0]?.image &&
              urlFor(data[0]?.image)
                .ignoreImageParams()
                .width(800)
                .quality(60)
                .url()
            }
            alt='Featured Image of blog post'
            className='w-full h-96 object-cover object-center'
          />
          <p>{data[0]?.description}</p>
        </article>
        {/* END Blog Post */}
      </div>
    </>
  )
}
