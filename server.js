const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const fetch = require('node-fetch')
// create express server
const app = express()

const typeDefs = `

type Game {
  id: Int!
  date: String!
  home_team_id: Int!
  home_team_score: Int!
  period: Int!
  postseason: Boolean!
  season: Int!
  status: String!
  time: String!
  visitor_team_id: Int!
  visitor_team_score: Int!
}

type StatsByPlayer {
  id: Int!
  ast: Int!
  blk: Int!
  dreb: Int!
  fg3_pct: Float!
  fg3m: Int!
  fg_pct: Float!
  fga: Int!
  fgm: Int!
  ft_pct: Float!
  fta: Int!
  ftm: Int!
  game: Game
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

type Player {
    id: Int!
    first_name: String!
    name: String!
    height_feet: Int
    height_inches: Int
    last_name: String!
    position: String!
    team: Team
    weight_pounds: Int
}

type Team {
    id: Int!
    abbreviation: String!
    city: String!
    conference: String!
    division: String!
    full_name: String!
    name: String!
}

type Query {
  getplayer: Player
  getplayerbyname(name: String!): Player
  getstatsbyplayerid(playerid: Int!): StatsByPlayerId
}
`

// creating api call
const getPlayerFromApi = async () => {
  const response = await fetch(
    'https://www.balldontlie.io/api/v1/players?search'
  )
  return response.json()
}

//creating api call to grab beer by name
const getPlayerFromApiByName = async (beerName) => {
  const response = await fetch(
    'https://www.balldontlie.io/api/v1/players?search${playerName}'
  )
  return response.json()
}

const resolvers = {
  Query: {
    getplayer: async () => {
      const players = await getPlayerFromApi()
      return players[0]
    },
    getplayerbyname: async (root, args) => {
      const players = await getPlayerFromApiByName(args.name)
      return players[0]
    },
    getstatsbyplayerid: async (root, args) => {
      const stats = await getStatsByPlayerId(args.name)
      return stats.data[0]
    },
  },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))
app.listen(8000)
