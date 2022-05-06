import { SchemaLink } from '@apollo/client/link/schema'
import { schema } from './graphql'

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import { useForm } from 'react-hook-form'
import { useState } from 'react'

import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Footer from './components/Footer'

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

  // destructured react hook form to handle user input and to reset the text field
  const { register, handleSubmit, resetField } = useForm<FormValues>()

  // create event handler to retrieve player that matches user input
  const onSubmit = (data: FormValues) => {
    setPlayerName(data.userInput)
  }

  // create function to reset the text field
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
          <h1 className="text-center text-6xl font-bold uppercase">
            Tip The Ball Up
          </h1>
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  )
}

export default Home
