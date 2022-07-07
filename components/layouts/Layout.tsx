import Head from 'next/head'
import Navbar from '../global/Navbar'
import Footer from '../global/Footer'
import React from 'react'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="bg-slate-50">
      <Head>
        <title>Tip The Ball Up</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="application used to retrieve player profile and stats"
        />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
