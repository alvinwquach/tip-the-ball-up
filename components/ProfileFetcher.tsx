import React from 'react'
import {
  useGetPlayerNameQuery,
  useGetPlayerStatsQuery,
} from '../src/generated/graphql'
import BasketballInformationGraphQL from './BasketballInformationGraphQL'

type ProfileFetcherProps = {
  /* Player's full name */
  playername: string
  playerid: number
}

function PlayerFetcher({ playername, playerid }: ProfileFetcherProps) {
  const { data, loading, error } = useGetPlayerNameQuery({
    variables: { playername },
  })

  const {
    data: statsData,
    loading: statsLoading,
    error: statsError,
  } = useGetPlayerStatsQuery({
    variables: { playerid },
  })

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  if (statsLoading) return <p>Loading...</p>
  if (statsError) return <p>Error: {statsError.message}</p>

  return (
    <div>
      {data && statsData && (
        <BasketballInformationGraphQL playerid={statsData} playername={data} />
      )}
    </div>
  )
}

export default PlayerFetcher
