const express = require('express')
const { graphqlHTTP } = require('express-graphql')
const { makeExecutableSchema } = require('@graphql-tools/schema')
const fetch = require('node-fetch')
const {
  responseSymbol,
} = require('next/dist/server/web/spec-compliant/fetch-event')
// create express server
const app = express()

const typeDefs = `

`

// creating api call
const getFromApi = async () => {
  const response = await fetch(
    'https://www.balldontlie.io/api/v1/stats?seasons[]=2021&player_ids[]&start_date=2021-10-18&per_page=100'
  )
  return response.json()
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
})

app.use('/graphql', graphqlHTTP({ schema, graphiql: true }))
app.listen(8000)
