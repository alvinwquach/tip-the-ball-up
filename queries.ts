import { gql } from '@apollo/client'

const basketballFragment = gql`
  fragment BasketballFragment on PlayerStats {
    id
    ast
    blk
    dreb
    fg3_pct
    fg3a
    fg3m
    fg_pct
    fga
    fgm
    ft_pct
    fta
    ftm
    Game {
      id
      date
      home_team_id
      home_team_score
      season
      time
      visit_team_id
      visit_team_score
    }
    min
    oreb
    pf
    player {
      id
      first_name
      height_feet
      height_inches
      last_name
      position
      team_id
      weight_pounds
    }
    pts
    reb
    stl
    team {
      id
      abbreviation
      conference
      division
      full_name
      name
    }
    turnover
  }
`

const namequery = gql`
  ${basketballFragment}
  query GetPlayerName($playername: String!) {
    getplayerbyname(name: $playername) {
      ...BasketballFragment
    }
  }
`

const allquery = gql`
  ${basketballFragment}
  query GetAllPlayers {
    getplayer {
      ...basketballFragment
    }
  }
`
