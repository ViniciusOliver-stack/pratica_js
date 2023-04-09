import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Head>
        <title>Prática JS</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <Header />
    </div>
  )
}
