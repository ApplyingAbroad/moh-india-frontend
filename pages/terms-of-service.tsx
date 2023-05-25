import Footer from '@/components/Footer'
import LogoBar from '@/components/Hero/LogoBar'
import NavBar from '@/components/Hero/NavBar'
import React from 'react'

const Terms = () => {
  return (
    <main className='bg-beige-50'>
      <NavBar />
      <LogoBar />
      <div className='text-center my-6 prose mx-auto px-4 lg:px-0'>
        <p className='uppercase text-sm'>Legal terms of service</p>

        <h1 className='font-serif text-5xl font-bold'>Terms of Service</h1>
      </div>
      <div className='my-16 prose prose-indigo mx-auto px-6 lg:px-0'>
        <div className='space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>Introduction</h2>
          <p className=' text-stone-500 text-base  '>
            By using our SOP generator, you agree to receive communications from
            us, including but not limited to emails, notifications, and other
            messages. You can opt out of receiving certain communications by
            updating your preferences in your account settings.
          </p>
        </div>

        <div className='space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>Communications:</h2>

          <ul className=' text-stone-500 text-base   '>
            <li>
              By using our SOP generator, you agree to receive communications
              from us, including but not limited to emails, notifications, and
              other messages. You can opt out of receiving certain
              communications by updating your preferences in your account
              settings.
            </li>
          </ul>
        </div>

        <div className='space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>Purchases:</h2>
          <p className='text-stone-500 text-base  '>
            All purchases of our SOP generator are subject to our refund policy.
            Please see the <strong>Refunds</strong>section below for more
            information.
          </p>
        </div>

        <div className='space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>Features:</h2>
          <p className='text-stone-500 text-base  '>
            Our SOP generator is constantly evolving and improving. We reserve
            the right to add, remove, or modify features at any time without
            notice.
          </p>
        </div>

        <div className='space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>Features:</h2>
          <p className='text-stone-500 text-base  '>
            Our SOP generator is constantly evolving and improving. We reserve
            the right to add, remove, or modify features at any time without
            notice.
          </p>
        </div>

        <div className='space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>Free Usage:</h2>
          <p className='text-stone-500 text-base  '>
            We offer a free trial period for our SOP generator. The length of
            the free trial and the features included will be specified at the
            time of sign-up. After the free trial, you will be required to
            purchase a subscription in order to continue using the SOP
            generator..
          </p>
        </div>

        <div className='space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>Refunds:</h2>
          <p className='text-stone-500 text-base  '>
            We offer a no-questions-asked refund policy for all purchases within
            7 days of the original purchase date. However, if you have used the
            SOP generator for more than 20% of the purchase capacity, we will
            not issue a refund. To request a refund, please contact us at
            hey@taliorandcompany.com.
          </p>
        </div>

        <div className='space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>
            Prohibited Use for Illegal Means:
          </h2>
          <p className='text-stone-500 text-base  '>
            Our SOP generator may only be used for lawful purposes. You agree
            not to use our SOP generator for any illegal or unauthorized
            purpose, including but not limited to committing fraud or engaging
            in illegal immigration activities.
          </p>
        </div>

        <div className='space-y-2 mb-6'>
          <h2 className='font-bold text-xl'>Copyright Policy:</h2>
          <p className='text-stone-500 text-base  '>
            You retain the rights to any content that you generate using the SOP
            generator. You may use, reproduce, distribute, or otherwise exploit
            the content generated by the SOP generator for any lawful purpose,
            subject to our terms and conditions. Any unauthorized use of our SOP
            generator or its content may violate copyright laws, trademark laws,
            and other laws.
          </p>
        </div>

        <div className='space-y-2 mb-6'>
          <h2 className='font-bold text-xl '>Contact Us</h2>
          <p className='text-stone-500 text-base  '>
            If you have any questions or concerns about our policies or the way
            we handle your personal information, please contact us at
            hello@taliorandcompany.com .
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default Terms
