import { NextUIProvider } from '@nextui-org/react'

import '@/styles/globals.css'
import Navbar from '@/components/Navbar'

export default function App({ Component, pageProps }) {
  return (
    <>
      <NextUIProvider>
        <Navbar />
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  )
}
