import React, { useState, useEffect } from 'react'
import { getFirst100Players } from '../basketballapi'

function TestComponent() {
  const [playerPage, setPlayerPage] = useState([])

  useEffect(() => {
    const getFirstPage = async () => {
      const first100Players = await getFirst100Players()
      setPlayerPage(first100Players.data)
    }
    getFirstPage()
  }, [])

  //   const getFirst100Players = async () => {
  //     const response = await fetch(
  //       `https://www.balldontlie.io/api/v1/players?page=1&per_page=100`
  //     )
  //     const data = await response.json()
  //     setPlayerPage(data.data)
  //     console.log(data.data)
  //   }

  return <pre>{JSON.stringify(playerPage)}</pre>
}

export default TestComponent
