import React from 'react'
import { useGetPlayerNameQuery } from '../src/generated/graphql'
import BasketballInformationGraphQL from './BasketballInformationGraphQL'

type PlayerFetcherProps = {
  playername: string
  searched: boolean
}

function PlayerFetcher({ playername, searched }: PlayerFetcherProps) {
  const { data, loading, error } = useGetPlayerNameQuery({
    variables: { playername },
  })
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      {data && (
        <BasketballInformationGraphQL playername={data} searched={searched} />
      )}
    </div>
  )
}

export default PlayerFetcher
