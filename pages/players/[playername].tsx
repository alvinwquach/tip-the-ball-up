import Head from 'next/head'
import { getAllPlayers, PagePlayer } from '../../basketballapi'
import playerCache from '../../playercache'

type PlayerProps = {
  player: PagePlayer
}

export default function Player({ player }: PlayerProps) {
  return (
    <>
      <Head>
        <title> Tip The Ball Up</title>
      </Head>
      <pre>{JSON.stringify(player)}</pre>
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
    fallback: true, // false or 'blocking'
  }
}

export async function getStaticProps(context: any) {
  // takes the params object, returns an object with props
  // .find returns a boolean (returns first element of the array that returns true)
  const cache = await playerCache.cache.get()
  const player = cache.find((cachedPlayer) => {
    const fullName = cachedPlayer.first_name + `-` + cachedPlayer.last_name
    return context.params.playername === fullName.toLowerCase()
  })
  return {
    props: {
      player,
    },
  }
}
