import { Resolvers } from '@apollo/client'
import { makeExecutableSchema } from '@graphql-tools/schema'
import { getPlayerFromApiByName, getPlayerFromApi } from './basketballapi'

//schema
const typeDefs = `
type Player {
    id: Int!
    name: String!
    height_feet: Int
    height_inches: Int
    position: String!
    team: Team
    weight_pounds: Float
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
      return players[0]
    },
  },
}

// server
export const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})
