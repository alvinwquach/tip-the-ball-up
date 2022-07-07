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

type StatsByPlayerId {
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
  getplayerbyname(name: String!): Player
  getstatsbyplayerid(playerid: Int!): [StatsByPlayerId]
}
`

const resolvers = {
  Query: {
    getplayerbyname: async (root, args) => {
      const players = await getPlayerFromApiByName(args.name)
      return players[0]
    },
    getstatsbyplayerid: async (root, args) => {
      const stats = await getStatsByPlayerId(args.name)
      return stats.data
    },
  },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))
app.listen(8000)
