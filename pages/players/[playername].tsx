import Head from 'next/head'
import { getAllPlayers, PagePlayer } from '../../basketballapi'
import ProfileFetcher from '../../components/ProfileFetcher'
import playerCache from '../../playercache'

import { SchemaLink } from '@apollo/client/link/schema'
import { schema } from '../../graphql'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'

type PlayerHeightProps = {
  feet?: number | null
  inches?: number | null
}

function PlayerHeight({ feet, inches }: PlayerHeightProps) {
  if (
    feet === undefined ||
    feet === null ||
    inches === null ||
    inches === null
  ) {
    return <dd>Unknown</dd>
  }
  return (
    <dd>
      {feet}' {inches}""
    </dd>
  )
}

type PlayerPositionProps = {
  position?: string | null
}

function PlayerPosition({ position }: PlayerPositionProps) {
  if (position === '') {
    return <dd>Unknown</dd>
  }
  return <dd>{position}</dd>
}

type PlayerProps = {
  player: PagePlayer
}

const client = new ApolloClient({
  cache: new InMemoryCache(),
  // schema hooks up to local server
  link: new SchemaLink({ schema }),
})

export default function Player({ player }: PlayerProps) {
  // fullName doesn't exist on player object, fullName is 👇🏻
  const fullName = `${player.first_name} ${player.last_name}`

  return (
    <>
      <Head>
        <title>{fullName} | Tip The Ball Up</title>
      </Head>
      <ApolloProvider client={client}>
        <ProfileFetcher playername={fullName} playerid={player.id} />
      </ApolloProvider>
      <pre className="min-h-full">{JSON.stringify(player, null, 4)}</pre>
    </>
  )
}

export async function getStaticPaths() {
  // paths array of player names transformed from a list of all players
  const players = await getAllPlayers()
  // write the cache to a file
  playerCache.cache.set(players)

  const paths = players.map((player) => {
    const fullName = player.first_name + `-` + player.last_name
    return {
      params: {
        playername: fullName.toLowerCase(),
      },
    }
  })

  return {
    paths: paths,
    fallback: false, // false or 'blocking'
  }
}

export async function getStaticProps(context: any) {
  // takes the params object, returns an object with props
  // .find returns a boolean (returns first element of the array that returns true)
  const cache = await playerCache.cache.get()
  const player =
    cache.find((cachedPlayer) => {
      const fullName = cachedPlayer.first_name + `-` + cachedPlayer.last_name
      return context.params.playername === fullName.toLowerCase()
    }) ?? null
  return {
    props: {
      player,
    },
  }
}
