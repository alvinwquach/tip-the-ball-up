import React, { useState, useEffect } from 'react'
import { getAllPlayers } from '../basketballapi'

function TestComponent() {
  const [playerPage, setPlayerPage] = useState<any[]>([])

  useEffect(() => {
    const getFirstPage = async () => {
      const allPlayers = await getAllPlayers()
      const paths = allPlayers
      setPlayerPage(paths)
    }
    getFirstPage()
  }, [])

  return <pre>{JSON.stringify(playerPage)}</pre>
}

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

