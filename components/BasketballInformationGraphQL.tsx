import React from 'react'
import {
  GetPlayerNameQuery,
  GetPlayerStatsQuery,
} from '../src/generated/graphql'

type PlayerHeightProps = {
  feet?: number | null
  inches?: number | null
}

function PlayerHeight({ feet, inches }: PlayerHeightProps) {
  if (
    feet === undefined ||
    feet === null ||
    inches === undefined ||
    inches === null
  ) {
    return <dd>Unknown</dd>
  }
  return (
    <dd>
      {feet}' {inches}"
    </dd>
  )
}

type BasketballInformationGraphQLProps = {
  playername: GetPlayerNameQuery
  playerid: GetPlayerStatsQuery
}

function BasketballInformationGraphQL({
  playername,
  playerid,
}: BasketballInformationGraphQLProps) {
  const player = playername.getplayerbyname
  const stats = playerid.getstatsbyplayerid

  return player ? (
    <>
      <dl>
        <dd>
          {player.first_name} {player.last_name}
        </dd>
        <PlayerHeight feet={player.height_feet} inches={player.height_inches} />
        <dd>{player.weight_pounds}</dd>
        <dd>{player.position}</dd>
        <dd>{player.team?.full_name}</dd>
        <dd>{player.team?.conference}</dd>
        <dd>{player.team?.division}</dd>
      </dl>
    </>
  ) : null
}

export default BasketballInformationGraphQL
