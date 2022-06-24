import Head from 'next/head'
import { getAllPlayers } from '../../basketballapi'

export default function Player() {
  return (
    <>
      <Head>
        <title>Steph Curry | Tip The Ball Up</title>
      </Head>
    </>
  )
}

export async function getStaticPaths() {
  // paths array of player names transformed from a list of all players
  const players = await getAllPlayers()
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
  return {
    props: {},
  }
}
