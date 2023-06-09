import React from 'react'
import Team from './Team'
import Image from 'next/image'

const values = [
  {
    name: 'Our Story',
    description: `Our journey has just began with a mission to revolutionize tailoring. Founder Mr. Dinesh Aggarwal combined traditional craftsmanship with modern design, creating a brand known for impeccable fit and reflecting individuality. Today, we're a thriving company, trusted by customers from all walks of life. Craftsmanship, innovation, and customer satisfaction remain our core values.`,
    // icon: (
    //   <PuzzlePieceIcon className='text-lime-600 hi-solid hi-heart inline-block w-5 h-5' />
    // ),
  },
  {
    name: 'Our Philosophy',
    description: `At tailorandcompany.com, our philosophy is simple: exceptional tailoring for your unique style. We use the finest fabrics, skilled craftsmanship, and innovative techniques to create high-quality garments. With personalized attention to detail, we ensure your satisfaction every step of the way. Your journey, our honor.`,
    // icon: (
    // <HeartIcon className='text-red-500 hi-solid hi-arrow-down inline-block w-5 h-5' />
    // ),
  },
  {
    name: 'Sustainable Clothing Manufacturing',
    description: `At our company, we prioritize sustainability and offer a wide
              range of eco-friendly and sustainable fabrics. We take pride in
              being the trusted manufacturer behind numerous international
              clothing labels. Whether you require high volume bulk orders or
              have low minimum order requirements, we cater to both small
              businesses and established brands.`,
  },
  {
    name: 'Professional Team of Experts',
    description:
      'Our passionate team consists of talented individuals with extensive experience in the international fashion industry. From creative designers and technical experts to production managers, quality control managers, merchants, Key Account Managers (KAM), sourcing specialists, and manufacturing experts, we provide a comprehensive range of services. These include design, pattern making, technical specifications, sampling, and low minimum stock production.',
  },
  {
    name: 'Quality Consciousness',
    description:
      "Quality is a fundamental aspect of our company's identity. Our dedicated quality control team utilizes the latest testing tools to ensure that the garments we deliver are free from defects. We strive for excellence in all our operations and minimize material wastage. Our quality analysts closely monitor the manufacturing process to ensure that our products meet international standards for stitching, fabrics, and color combination. We conduct thorough checks and tests, including fabric strength, stitch durability, print and embroidery quality, tear strength, color fastness, and shrinkage.",
  },
  {
    name: 'Infrastructure',
    description:
      'Our workforce is essential to our success in the garment industry. Our seasoned designers, tailors, weavers, embroidery experts, craftsmen, quality analysts, and packaging specialists enable us to offer high-quality knitted and woven fashion garments for men, women, and kids. Our tailors and weavers stay updated with the latest trends and incorporate cutting-edge styles and cuts into our garments. Our quality analysts are dedicated to producing flawless fashion garments by conducting inspections at every stage of production. We provide regular training to our professionals to keep them updated on global fashion styles.',
  },
  {
    name: 'Our Machinery',
    description:
      'Our extensive range of machinery includes single needle, double needle, bartacker, three, four, and five-thread sergers, coverstitches, blindstitch hemmers, zigzag machines, button holers, button sewers, snap machines, grommet machines, eyelet machines, fusing machines, pocket openers, embroidery machines, shirring machines, smocking machines, computerized marking and grading systems, digitizers, marker plotters, and various trim finishers such as binders, hemmers, and folders.',
  },
  {
    name: 'Our Cutting Floor',
    description:
      'We boast a spacious cutting area capable of handling production volumes of up to 60,000 units per month. Our skilled cutters are experienced in working with a variety of fabrics, including nylon, light denim, twill, corduroy, fleece, French terry, Lycra, velour, velour terry, jersey, comb cotton, interlock, woven, flannel, various rib types, vinyl, satin, and more.',
  },
]

const AboutUs = () => {
  return (
    <>
      <div className='space-y-16 container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-20'>
        {/* Heading */}
        <div className='text-center max-w-xl mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl font-semibold mb-4'>
            We are <span className='font-light'>Tailor & Company</span>
          </h1>
          <h3 className='text-lg md:leading-relaxed font-light'>
            A dedicated team committed to delivering high-quality tailoring
            services tailored to your unique style and preferences.
          </h3>
        </div>
        {/* END Heading */}

        {/* Images */}
        <div className='grid grid-cols-2 md:grid-cols-3 w-full gap-5'>
          <Image
            height={600}
            width={800}
            src='/about/about-left.webp'
            alt='Featured Image'
            className='col-span-2 object-cover object-center h-96 w-full'
          />
          <Image
            height={600}
            width={400}
            src='/about/about-right.webp'
            alt='Featured Image'
            className='hidden md:block col-span-1 object-cover object-center h-96 w-full'
          />
        </div>
        {/* END Images */}

        {/* Values */}
        {/* <div className='grid grid-cols-1 md:grid-cols-2 gap-16'>
          {values.map((value, index) => (
            <div key={index}>
              <h3 className='flex items-center space-x-2 text-lg font-bold uppercase tracking-wide mb-2'>
                {value.icon}
                <span>{value.name}</span>
              </h3>
              <p className='font-serif leading-relaxed text-gray-700'>
                {value.description}
              </p>
            </div>
          ))}
        </div> */}
        <article className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-full prose md:prose-lg mx-auto font-serif'>
          {values.slice(0, values.length / 2).map((value, index) => (
            <div key={index}>
              <h3>
                <span>{value.name}</span>
              </h3>
              <p>{value.description}</p>
            </div>
          ))}
        </article>
        <Team />
        <article className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-full prose md:prose-lg mx-auto prose-h3:font-serif font-serif'>
          {values.slice(values.length / 2).map((value, index) => (
            <div key={index}>
              <h3>
                <span>{value.name}</span>
              </h3>
              <p>{value.description}</p>
            </div>
          ))}
        </article>
        {/* END Values */}
      </div>
    </>
  )
}

export default AboutUs
