// import MetaTags from '@/components/SEO/MetaTags'
import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const websiteUrl = 'https://www.tailorandcompany.com'
  return (
    <Html lang='en'>
      <Head>
        <meta
          name='description'
          content='At tailorandcompany.com, our philosophy is simple: exceptional tailoring for your unique style. We use the finest fabrics, skilled craftsmanship, and innovative techniques to create high-quality garments. With personalized attention to detail, we ensure your satisfaction every step of the way. Your journey, our honor.'
        />
        <meta
          name='keywords'
          content='tailoring, clothing, fashion, style, craftsmanship, fabrics, personalized, high-quality, satisfaction'
        />
        <meta name='author' content='Tailor and Company' />

        {/* JSON-LD structured data */}
        <script type='application/ld+json'>
          {`
          {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Tailor and Company",
            "url": "${websiteUrl}",
            "logo": "${websiteUrl}/company/moh-india-logo.png",
            "description": "At Tailor and Company, we provide exceptional tailoring services that reflect your unique style. Our skilled craftsmen use high-quality fabrics and innovative techniques to create garments of outstanding quality.",
          }
        `}
        </script>
        <link rel='canonical' href={websiteUrl} />
        <link rel='alternate' hrefLang='en-us' href={websiteUrl} />
        <link rel='alternate' hrefLang='en' href={websiteUrl} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
