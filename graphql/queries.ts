import { gql } from '@apollo/client'

const playerFragment = gql`
  fragment playerFragment on Player {
    id
    first_name
    height_feet
    height_inches
    last_name
    position
    team {
      id
      abbreviation
      city
      conference
      division
      full_name
      name
    }
    weight_pounds
  }
`

const namequery = gql`
  ${playerFragment}
  query GetPlayerName($playername: String!) {
    getplayerbyname(name: $playername) {
      ...playerFragment
    }
  }
`

const allquery = gql`
  ${playerFragment}
  query GetAllPlayers {
    getplayer {
      ...playerFragment
    }
  }
`
