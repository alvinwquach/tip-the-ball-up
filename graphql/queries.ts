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

const statsquery = gql`
  query GetPlayerStats($playerid: Int!) {
    getstatsbyplayerid(playerid: $playerid) {
      id
      ast
      blk
      dreb
      fg3_pct
      fg3m
      fg_pct
      fga
      fgm
      ft_pct
      fta
      ftm
      game {
        id
        date
        home_team_id
        home_team_score
        period
        postseason
        season
        status
        time
        visitor_team_id
        visitor_team_score
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
      pts
      reb
      stl
      team {
        id
        abbreviation
        city
        conference
        division
        full_name
        name
      }
      turnover
    }
  }
`
