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
      <p>{player.first_name}</p>
      <p>{player.last_name}</p>
      <p>{player.height_feet}</p>
      <p>{player.height_inches}</p>
      <p>{player.weight_pounds}</p>
      <p>{player.position}</p>
      <p>{player.team?.full_name}</p>
      <p>{player.team?.conference}</p>
      <p>{player.team?.division}</p>
    </>
  ) : null
}

export default BasketballInformationGraphQL
