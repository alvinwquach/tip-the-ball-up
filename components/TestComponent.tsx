import React, { useState, useEffect } from 'react'
import { getAllPlayers, PagePlayer } from '../basketballapi'

function TestComponent() {
  const [playerPage, setPlayerPage] = useState<PagePlayer[]>([])

  useEffect(() => {
    const getFirstPage = async () => {
      // get 200 players from api
      const allPlayers = await getAllPlayers()
      const paths = allPlayers
      // set player page of 200 players from api so that
      // we can read it outside of this effect from the playerPage
      // variable
      setPlayerPage(paths)
    }
    getFirstPage()
  }, [])

  // playerPage already has 200 players
  // i need to transform (map) those player objects
  // into the shape that NextJS wants

  const playerPaths: NextPaths = playerPage.map((player) => {
    //
    // tiptheball.com/players/stephen-curry
    const fullName = player.first_name + `-` + player.last_name
    return {
      params: {
        playername: fullName.toLowerCase(),
      },
    }
  })

  return <pre>{JSON.stringify(playerPaths)}</pre>
}

type NextPaths = {
  params: any
}[]

// export async function getStaticPaths() {
//   const players = players.map((player) => {
//     params: {
//     }
//   })

//   return {
//     path: [{ params: {} }],
//     fallback: true,
//   }
// }

// export async function getStaticProps({ params }) {
//   return { props: {} }
// }

export default TestComponent

// import { getAllPlayers } from '../../basketballapi'

// function Player() {
//   return <div>Player</div>
// }

// export default Player

// export async function getStaticPaths() {
//   const players = await getAllPlayers()
// }

// const paths = players.map((player) => {

// })
