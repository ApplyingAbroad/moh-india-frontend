const ethics = [
  [
    {
      title: 'No Use of Child Labor',
      description:
        'We strictly prohibit the use of child labor, bonded labor, and other exploitative practices against workers.',
    },
    {
      title: 'Ethical Business Conduct',
      description:
        'We take full responsibility and strive to meet the expectations of our employees, customers, governmental entities, and society through ethical business practices.',
    },
    {
      title: 'Advocating for Sustainability',
      description:
        'We embrace sustainable business practices and encourage our customers to choose sustainable fabrics and trims.',
    },
  ],
  [
    {
      title: 'Clear Communication',
      description:
        'We believe in clear, honest, and transparent communication, avoiding false promises or sugarcoated words.',
    },
    {
      title: 'Fair Trade Policy',
      description:
        'We implement fair pay, reasonable pricing, and promote gender equality within our workplace and business operations.',
    },
    {
      title: 'Customer-First Policy',
      description:
        'Our customers are of paramount importance to us. We prioritize their success and do everything possible to ensure they thrive.',
    },
  ],
]

export default function Ethics() {
  return (
    <>
      {/* Features Section: Vertical Cards */}
      <div className='overflow-hidden'>
        <div className='container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-20'>
          <div className='flex flex-col lg:flex-row space-y-12 lg:space-y-0 lg:space-x-20'>
            {/* Heading */}
            <div className='lg:w-5/12 xl:w-5/12 space-y-10'>
              <div className='font-serif mb-10'>
                <h2 className='text-3xl text-black md:text-4xl mb-4'>
                  Our Ethics & Credentials
                </h2>
                <h3 className='text-lg md:leading-relaxed text-gray-600'>
                  Tailor & Company is renowned for its exceptional expertise in
                  producing premium garments at affordable prices, while also
                  upholding the utmost level of business ethics and unmatched
                  credentials.
                </h3>
                <h3 className='text-lg md:leading-relaxed text-gray-600 mt-4'>
                  We strive to establish elevated benchmarks in terms of
                  quality, sustainability, social responsibility, and trust,
                  akin to industry leaders.
                </h3>
              </div>
            </div>
            {/* END Heading */}

            {/* Features in Cards */}
            <div className='lg:w-7/12 xl:w-7/12 flex-none relative'>
              <div className='relative flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0'>
                <div className='md:w-1/2 space-y-6'>
                  {ethics[0].map((card) => (
                    <div className='p-5 border-1 border-black'>
                      <h4 className='text-lg font-serif font-bold mb-2'>
                        {card.title}
                      </h4>
                      <p className='leading-relaxed text-gray-600'>
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
                <div className='md:w-1/2 space-y-6'>
                  {ethics[1].map((card) => (
                    <div className='p-5 border-1 border-black'>
                      <h4 className='text-lg font-serif font-bold mb-2'>
                        {card.title}
                      </h4>
                      <p className='leading-relaxed text-gray-600'>
                        {card.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* END Features in Cards */}
          </div>
        </div>
      </div>
      {/* END Features Section: Vertical Cards */}
    </>
  )
}
