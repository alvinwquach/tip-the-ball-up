import { Resolvers } from '@apollo/client'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { getPlayerStatsFromAPIByName, getFromApi } from './api/basketballapi'

//schema
const typeDefs = `
type PlayerStats {
  id: Int!
  ast: Int!
  blk: Int!
  dreb: Int!
  fg3_pct: Int!
  fg3a: Int!
  fg3m: Int!
  fg_pct: Float!
  fga: Int!
  fgm: Int!
  ft_pct: Float!
  fta: Int!
  ftm: Int!
  Game: Game
  min: String!
  oreb: Int!
  pf: Int!
  player: Player
  pts: Int!
  reb: Int!
  stl: Int!
  team: Team
  turnover: Int!
}

type Game {
  id: Int!
  date: String!
  home_team_id: Int!
  home_team_score: Int!
  season: Int!
  time: String!
  visit_team_id: Int!
  visit_team_score: Int!
}

type Player {
  id: Int!
  first_name: String!
  height_feet: Int
  height_inches: Int
  last_name: String!
  position: String!
  team_id: Int!
  weight_pounds: Int
}

type Team {
  id: Int!
  abbreviation: String!
  conference: String!
  division: String!
  full_name: String!
  name: String!
}

typeQuery {
  getplayer: Player
  getplayerbyname(name: String!): Player
}
`

// creating api call
const getStatsFromApi = async () => {
  const response = await fetch(
    'https://www.balldontlie.io/api/v1/stats?seasons[]=2021&player_ids[]&start_date=2021-10-18&per_page=100'
  )
  return response.json()
}

//creating api call to grab player by name
const getPlayerFromAPIByName = async (playerName: string) => {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/stats?seasons[]=2021&player_ids[]&start_date=2021-10-18&per_page=100&search=${playerName}`
  )
  return response.json()
}

// interface from Apollo for resolvers
const resolvers: Resolvers = {
  Query: {
    getplayer: async () => {
      const players = await getStatsFromApi()
      return players[0]
    },
    getplayerbyname: async (root, args) => {
      const players = await getPlayerFromAPIByName(args.name)
      return players[0]
    },
  },
}


// server
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
