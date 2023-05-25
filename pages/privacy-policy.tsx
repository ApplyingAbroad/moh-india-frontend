import Footer from '@/components/Footer'
import LogoBar from '@/components/Hero/LogoBar'
import NavBar from '@/components/Hero/NavBar'
import React from 'react'

const Privacypolicy = () => {
  return (
    <main className='bg-beige-50'>
      <NavBar />
      <LogoBar />
      <div className='text-center my-6'>
        <p className='uppercase text-sm'>Privacy first, always</p>

        <h1 className='font-serif text-5xl font-bold'>Privacy Policy</h1>
      </div>
      <div className='my-16 prose prose-indigo mx-auto px-6 lg:px-0'>
        <div className='container space-y-2 mb-6'>
          <h2 className='font-bold text-xl'>Introduction</h2>
          <p className='   text-my-gray3 text-base  '>
            At tailorandcompany.com , we are committed to protecting the privacy
            of our users. This privacy policy explains how we collect, use, and
            protect the personal information of our users. By using our website
            or services, you agree to the collection, use, and disclosure of
            your personal information as described in this policy.
          </p>
        </div>

        <div className='container space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>Definitions</h2>

          <ul className='  text-my-gray3 text-base   '>
            <li>
              <strong>Data</strong> refers to any information that can be used
              to identify an individual, including but not limited to names,
              addresses, email addresses, and other contact information.
            </li>
            <li>
              <strong>User</strong> refers to any individual who accesses our
              website or uses our services.
            </li>
            <li>
              <strong>Data Collector</strong> refers to any person or entity
              that collects personal data from users.
            </li>
            <li>
              <strong>Personal Data</strong> refers to any data that relates to
              an identified or identifiable individual
            </li>
          </ul>
        </div>

        <div className='container space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>Types of Data Collected</h2>
          <p className='   text-my-gray3 text-base  '>
            {' '}
            We collect the following types of data from our users:
          </p>
          <ul className='  text-my-gray3 text-base   '>
            <li>
              Personal data. This includes data such as names, addresses, email
              addresses, and other contact information that users provide when
              they register for an account or use our services.
            </li>
            <li>
              Usage data. This includes data about how users interact with our
              website and services, such as the pages they visit and the
              features they use.
            </li>
            <li>
              Technical data. This includes data such as IP addresses and other
              technical information that is automatically collected when users
              access our website or services.
            </li>

            <p className='   text-my-gray3 text-base  '>
              We may also collect personal data from third-party sources, such
              as social media platforms, to enhance our services and provide
              more personalized experiences for our users.
            </p>
          </ul>
        </div>

        <div className='container space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>CalOPPA</h2>
          <p className='   text-my-gray3 text-base  '>
            We comply with the California Online Privacy Protection Act
            (CalOPPA), which requires us to post a clear and conspicuous privacy
            policy on our website. This privacy policy is intended to inform
            users of our website about the types of personal information we
            collect, how we use and share that information, and the choices
            users have with respect to their personal information
          </p>
        </div>

        <div className='container space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>GDPR</h2>
          <p className='   text-my-gray3 text-base  '>
            We are also committed to complying with the General Data Protection
            Regulation (GDPR), which applies to the processing of personal data
            of individuals in the European Union. This means that we will only
            process your personal data in accordance with the GDPR, and will
            take appropriate measures to protect your personal data from
            unauthorized access, use, or disclosure.
          </p>
        </div>

        <div className='container space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>Data Sharing</h2>
          <p className='   text-my-gray3 text-base  '>
            We may share your personal information with third parties for the
            following purposes:
          </p>
          <ul className='  text-my-gray3 text-base   '>
            <li>
              To provide the services you have requested. For example, if you
              sign up for a trial of our product, we will share your information
              with our payment processing partners to set up your account and
              process your payment.
            </li>
            <li>
              To improve our services. We may share your information with
              third-party service providers, such as analytics providers, to
              help us understand how users interact with our product and make
              improvements.
            </li>
            <li>
              To comply with legal obligations. We may be required to share your
              information in response to a subpoena, court order, or other legal
              process.
            </li>
          </ul>
        </div>

        <div className='container space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>Data Protection</h2>
          <p className='   text-my-gray3 text-base  '>
            We take reasonable steps to protect your personal information from
            unauthorized access, use, or disclosure. Some of the measures we use
            to protect your information include:
          </p>
          <ul className='  text-my-gray3 text-base   '>
            <li>
              Encrypting personal information in transit and at rest using
              industry-standard protocols.
            </li>
            <li>
              Implementing access controls to prevent unauthorized access to
              personal information.
            </li>
            <li>
              Regularly monitoring our systems for potential vulnerabilities and
              attacks.
            </li>
          </ul>
        </div>

        <div className='container space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>Changes to this Policy</h2>
          <p className='   text-my-gray3 text-base  '>
            We may update this privacy policy from time to time to reflect
            changes to our practices or for other operational, legal, or
            regulatory reasons. We will post any changes on this page and
            encourage you to review the policy periodically for updates:.
          </p>
          <ul className='  text-my-gray3 text-base   '>
            <li>
              Encrypting personal information in transit and at rest using
              industry-standard protocols.
            </li>
            <li>
              Implementing access controls to prevent unauthorized access to
              personal information.
            </li>
            <li>
              Regularly monitoring our systems for potential vulnerabilities and
              attacks.
            </li>
          </ul>
        </div>

        <div className='container space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>Contact Us</h2>
          <p className='text-my-gray3 text-base'>
            If you have any questions or concerns about our privacy policy or
            the way we handle your personal information, please contact us at
            hey@tailorandcompany.com .
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Privacypolicy
