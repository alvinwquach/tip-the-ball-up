import { useForm } from 'react-hook-form'
import { useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from '../components/Footer'

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

      <main className="flex w-full flex-1 flex-col">
        <h1 className="text-center text-6xl font-bold uppercase">
          Tip The Ball Up
        </h1>
      </main>
      <Footer />
    </div>
  )
}

export default Home
