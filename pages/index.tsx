import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import TestComponent from '../components/TestComponent'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Tip The Ball Up</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Playball&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className="flex w-full flex-col">
        <TestComponent />
      </main>
    </div>
  )
}

export default Home
