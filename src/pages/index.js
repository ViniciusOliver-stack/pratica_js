import { Inter } from 'next/font/google'
import Head from 'next/head'
import Header from '@/components/Header'

const inter = Inter({ subsets: ['latin'] })

const post = [
  { title: 'PomoFocus', excerpt: 'Aqui vem a descrição do projeto' },
  {
    title: 'CountDown',
    excerpt: 'Aqui vem a descrição do projeto falando como funciona'
  }
]

export default function Home() {
  return (
    <div className={inter.className}>
      <Head>
        <title>Prática JS</title>
        <link rel="icon" href="/public/favicon.ico" />
      </Head>

      <Header />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {post.map((post, index) => (
          <div key={post.title}>
            {post.title}
            {post.excerpt}
          </div>
        ))}
      </div>
    </div>
  )
}
