import React from 'react'
import { GetPlayerStatsQuery } from '../src/generated/graphql'

type PlayerStatsGraphQLProps = {
  /**
   * Queries for the player stats by the player id
   */
  playerid: GetPlayerStatsQuery
}

/**
 * passes in the stats data and player data to
 * basketball information graphq
 * @param param0
 * @returns
 */
function PlayerStatsGraphQL({ playerid }: PlayerStatsGraphQLProps) {
  const stats = playerid.getstatsbyplayerid

  // Only render player stats if stats is not undefined
  return stats ? (
    <>
      <dl>
        {/* <dd>{stats.ast}</dd>
        <dd>{stats.blk}</dd>
        <dd>{stats.pts}</dd>
        <dd>{stats.reb}</dd>
        <dd>{stats.stl}</dd> */}
      </dl>
    </>
  ) : null
}

export default PlayerStatsGraphQL
