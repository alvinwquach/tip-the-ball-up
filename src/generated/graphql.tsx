import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Game = {
  __typename?: 'Game';
  date: Scalars['String'];
  home_team_id: Scalars['Int'];
  home_team_score: Scalars['Int'];
  id: Scalars['Int'];
  period: Scalars['Int'];
  postseason: Scalars['Boolean'];
  season: Scalars['Int'];
  status: Scalars['String'];
  time: Scalars['String'];
  visitor_team_id: Scalars['Int'];
  visitor_team_score: Scalars['Int'];
};

export type Player = {
  __typename?: 'Player';
  first_name: Scalars['String'];
  height_feet?: Maybe<Scalars['Int']>;
  height_inches?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  last_name: Scalars['String'];
  name: Scalars['String'];
  position: Scalars['String'];
  team?: Maybe<Team>;
  weight_pounds?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  getplayerbyname?: Maybe<Player>;
  getstatsbyplayerid?: Maybe<StatsByPlayerId>;
};


export type QueryGetplayerbynameArgs = {
  name: Scalars['String'];
};


export type QueryGetstatsbyplayeridArgs = {
  playerid: Scalars['Int'];
};

export type StatsByPlayerId = {
  __typename?: 'StatsByPlayerId';
  ast: Scalars['Int'];
  blk: Scalars['Int'];
  dreb: Scalars['Int'];
  fg3_pct: Scalars['Float'];
  fg3m: Scalars['Int'];
  fg_pct: Scalars['Float'];
  fga: Scalars['Int'];
  fgm: Scalars['Int'];
  ft_pct: Scalars['Float'];
  fta: Scalars['Int'];
  ftm: Scalars['Int'];
  game?: Maybe<Game>;
  id: Scalars['Int'];
  min: Scalars['String'];
  oreb: Scalars['Int'];
  pf: Scalars['Int'];
  player?: Maybe<Player>;
  pts: Scalars['Int'];
  reb: Scalars['Int'];
  stl: Scalars['Int'];
  team?: Maybe<Team>;
  turnover: Scalars['Int'];
};

export type Team = {
  __typename?: 'Team';
  abbreviation: Scalars['String'];
  city: Scalars['String'];
  conference: Scalars['String'];
  division: Scalars['String'];
  full_name: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
};

export type PlayerFragmentFragment = { __typename?: 'Player', id: number, first_name: string, height_feet?: number | null, height_inches?: number | null, last_name: string, position: string, weight_pounds?: number | null, team?: { __typename?: 'Team', id: number, abbreviation: string, city: string, conference: string, division: string, full_name: string, name: string } | null };

export type GetPlayerNameQueryVariables = Exact<{
  playername: Scalars['String'];
}>;


export type GetPlayerNameQuery = { __typename?: 'Query', getplayerbyname?: { __typename?: 'Player', id: number, first_name: string, height_feet?: number | null, height_inches?: number | null, last_name: string, position: string, weight_pounds?: number | null, team?: { __typename?: 'Team', id: number, abbreviation: string, city: string, conference: string, division: string, full_name: string, name: string } | null } | null };

export const PlayerFragmentFragmentDoc = gql`
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
    `;
export const GetPlayerNameDocument = gql`
    query GetPlayerName($playername: String!) {
  getplayerbyname(name: $playername) {
    ...playerFragment
  }
}
    ${PlayerFragmentFragmentDoc}`;

/**
 * __useGetPlayerNameQuery__
 *
 * To run a query within a React component, call `useGetPlayerNameQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetPlayerNameQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetPlayerNameQuery({
 *   variables: {
 *      playername: // value for 'playername'
 *   },
 * });
 */
export function useGetPlayerNameQuery(baseOptions: Apollo.QueryHookOptions<GetPlayerNameQuery, GetPlayerNameQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetPlayerNameQuery, GetPlayerNameQueryVariables>(GetPlayerNameDocument, options);
      }
export function useGetPlayerNameLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetPlayerNameQuery, GetPlayerNameQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetPlayerNameQuery, GetPlayerNameQueryVariables>(GetPlayerNameDocument, options);
        }
export type GetPlayerNameQueryHookResult = ReturnType<typeof useGetPlayerNameQuery>;
export type GetPlayerNameLazyQueryHookResult = ReturnType<typeof useGetPlayerNameLazyQuery>;
export type GetPlayerNameQueryResult = Apollo.QueryResult<GetPlayerNameQuery, GetPlayerNameQueryVariables>;