import React from 'react'
import { GetPlayerNameQuery } from '../src/generated/graphql'

type BasketballInformationGraphQLProps = {
  playername: GetPlayerNameQuery
  searched: boolean
}
function BasketballInformationGraphQL({
  playername,
  searched,
}: BasketballInformationGraphQLProps) {
  const player = playername.getplayerbyname

  return player ? (
    <>
      <dl>
        <dd>
          {player.first_name} {player.last_name}
        </dd>
        <dd>
          {player.height_feet}' {player.height_inches}"
        </dd>
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
