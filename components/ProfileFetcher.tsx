import React from 'react'
import {
  useGetPlayerNameQuery,
  useGetPlayerStatsQuery,
} from '../src/generated/graphql'
import PlayerInfoGraphQL from './PlayerInfoGraphQL'
import PlayerStatsGraphQL from './PlayerStatsGraphQL'

type ProfileFetcherProps = {
  /**
   * Player's full name
   */
  playername: string
  /**
   * Player id
   */
  playerid: number
}

/**
 * given the player's name and id, queries for player by name
 * and queries for player by id for stats
 * @param param0
 * @returns
 */
function ProfileFetcher({ playername, playerid }: ProfileFetcherProps) {
  const {
    data: playerData,
    loading: playerLoading,
    error: playerError,
  } = useGetPlayerNameQuery({
    variables: { playername },
  })

  const {
    data: statsData,
    loading: statsLoading,
    error: statsError,
  } = useGetPlayerStatsQuery({
    variables: { playerid },
  })

  if (playerLoading) return <p>Loading...</p>
  if (playerError) return <p>Error: {playerError.message}</p>

  if (statsLoading) return <p>Loading...</p>
  if (statsError) return <p>Error: {statsError.message}</p>

  return (
    <div>
      {playerData && statsData && (
        <>
          {/* Passes in the player data to PlayerInfoGraphQL */}
          <PlayerInfoGraphQL playername={playerData} />
          {/* Passes in the stats data to PlayerStatsGraphQL */}
          <PlayerStatsGraphQL playerid={statsData} />
        </>
      )}
    </div>
  )
}

export default ProfileFetcher
