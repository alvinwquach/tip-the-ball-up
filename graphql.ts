import { Resolvers } from '@apollo/client'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { getPlayerFromApiByName, getPlayerFromApi } from './basketballapi'

//schema
const typeDefs = `
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
}
`

// apis

// interface from Apolo for resolvers
const resolvers: Resolvers = {
  Query: {
    getplayer: async () => {
      const players = await getPlayerFromApi()
      return players[0]
    },
    getplayerbyname: async (root, args) => {
      const players = await getPlayerFromApiByName(args.name)
      return players.data[0]
    },
  },
}

// server
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
