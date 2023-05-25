import WhatsappBecon from '@/components/WhatsappBecon'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <WhatsappBecon />
      <Component {...pageProps}></Component>
    </>
  )
}
