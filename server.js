const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const fetch = require('node-fetch')
// create express server
const app = express()

const typeDefs = `
type Player {
  id: Int!
  name: String!
  height_feet: Int
  height_inches: Int
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
  },
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))
app.listen(8000)
