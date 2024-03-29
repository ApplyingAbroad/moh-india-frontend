import sanityClient from './sanity'
import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder(sanityClient)
const urlFor = (source: any) => builder.image(source)

export default urlFor
