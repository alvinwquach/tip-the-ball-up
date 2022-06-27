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

export default TestComponent