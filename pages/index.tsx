import { useForm } from 'react-hook-form'
import { useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PlayerFetcher from '../components/PlayerFetcher'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'


import { SchemaLink } from '@apollo/client/link/schema'
import { schema } from '../graphql'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import TestComponent from '../components/TestComponent'

type FormValues = {
  userInput: string
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // schema hooks up to local server
  link: new SchemaLink({ schema }),
})

const Home: NextPage = () => {
  const [playerName, setPlayerName] = useState('')
  const [searched, setSearched] = useState(false)

  const { register, resetField, handleSubmit } = useForm({
    defaultValues: {
      userInput: '',
    },
  })

  const onSubmit = async (data: FormValues) => {
    setPlayerName(data.userInput)
    setSearched(false)
  }

  const handleClick = () => resetField('userInput')

  return (
    <ApolloProvider client={client}>
      <div className="flex min-h-screen flex-col items-center justify-center py-2">
        <Head>
          <title>Tip The Ball Up</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Playball&display=swap"
            rel="stylesheet"
          />
        </Head>

        <main className="flex w-full flex-1 flex-col">
          <Navbar />
          <Header />
          <TestComponent />
          <form
            className="flex justify-center"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              type="text"
              placeholder="Search for a player"
              className="input input-bordered w-full max-w-xs"
              {...register('userInput')}
            />
            <button type="button" className="btn ml-2" onClick={handleClick}>
              Reset
            </button>
            {playerName ? (
              <PlayerFetcher playername={playerName} searched={searched} />
            ) : null}
          </form>
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  )
}

export default Home
