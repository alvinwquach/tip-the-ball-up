// creating API call to grab all players
export const getAllPlayers = async () => {
  const allPlayers = []
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/players?page=1&per_page=100`
  )
  const json = await response.json()

  allPlayers.push(...json.data)

  const responsetwo = await fetch(
    `https://www.balldontlie.io/api/v1/players?page=2&per_page=100`
  )

  const json2 = await responsetwo.json()
  allPlayers.push(...json2.data)

  const responsethree = await fetch(
    `https://www.balldontlie.io/api/v1/players?page=3&per_page=100`
  )

  const json3 = await responsethree.json()
  allPlayers.push(...json3.data)

  const responsefour = await fetch(
    `https://www.balldontlie.io/api/v1/players?page=4&per_page=100`
  )

  const json4 = await responsefour.json()
  allPlayers.push(...json4.data)

  const responsefive = await fetch(
    `https://www.balldontlie.io/api/v1/players?page=4&per_page=100`
  )

  const json5 = await responsefive.json()
  allPlayers.push(...json5.data)

  const responsesix = await fetch(
    `https://www.balldontlie.io/api/v1/players?page=4&per_page=100`
  )

  const json6 = await responsesix.json()
  allPlayers.push(...json6.data)

  const responseseven = await fetch(
    `https://www.balldontlie.io/api/v1/players?page=4&per_page=100`
  )

  const json7 = await responseseven.json()
  allPlayers.push(...json7.data)

  return allPlayers
}

// creating API call to grab current season stats by player id
export const getStatsByPlayerId = async (
  playerId: number
): Promise<StatsByPlayerIdApi> => {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/stats?seasons[]=2021&start_date=2021-10-18&player_ids[]=${playerId}&per_page=100`
  )
  return response.json()
}

// creating API call to grab player by name
export const getPlayerFromApiByName = async (
  playerName: string
): Promise<PlayerApi> => {
  const response = await fetch(
    `https://www.balldontlie.io/api/v1/players?search=${playerName}`
  )
  return response.json()
}

// creating nested types for typescript
export type StatsByPlayerIdApi = {
  data: {
    id: number
    ast: number
    blk: number
    dreb: number
    fg3_pct: number
    fg3a: number
    fg3m: number
    fg_pct: number
    fga: number
    fgm: number
    ft_pct: number
    fta: number
    ftm: number
    game: Game
    min: string
    oreb: number
    pf: number
    player: Player
    pts: number
    reb: number
    stl: number
    team: Team
    turnover: number
  }[]
  meta: {
    total_pages: number
    current_page: number
    next_page: number
    per_page: number
    total_count: number
  }
}

type Team = {
  id: number
  abbreviation: string
  city: string
  conference: string
  division: string
  full_name: string
  name: string
}

export type PlayerApi = {
  data: {
    id: number
    first_name: string
    height_feet: number
    height_inches: number
    last_name: string
    position: string
    team: Team
    weight_pounds: number
  }[]
  meta: {
    total_pages: number
    current_page: number
    next_page: null
    per_page: number
    total_count: number
  }
}

type Game = {
  id: number
  date: string
  home_team_id: number
  home_team_score: number
  period: number
  postseason: boolean
  season: number
  status: string
  time: string
  visitor_team_id: number
  visitor_team_score: number
}

type Player = {
  id: number
  first_name: string
  height_feet: number
  height_inches: number
  last_name: string
  position: string
  team_id: number
  weight_pounds: number
}

export const getPlayer = async (): Promise<PlayerApi> => {
  return {
    data: [
      {
        id: 115,
        first_name: 'Stephen',
        height_feet: 6,
        height_inches: 3,
        last_name: 'Curry',
        position: 'G',
        team: {
          id: 10,
          abbreviation: 'GSW',
          city: 'Golden State',
          conference: 'West',
          division: 'Pacific',
          full_name: 'Golden State Warriors',
          name: 'Warriors',
        },
        weight_pounds: 190,
      },
    ],
    meta: {
      total_pages: 1,
      current_page: 1,
      next_page: null,
      per_page: 25,
      total_count: 1,
    },
  }
}

export const getPlayerStats = async (): Promise<StatsByPlayerIdApi> => {
  return {
    data: [
      {
        id: 7367678,
        ast: 1,
        blk: 1,
        dreb: 10,
        fg3_pct: 61.5,
        fg3a: 13,
        fg3m: 8,
        fg_pct: 64.0,
        fga: 25,
        fgm: 16,
        ft_pct: 100.0,
        fta: 5,
        ftm: 5,
        game: {
          id: 473422,
          date: '2021-10-21T00:00:00.000Z',
          home_team_id: 10,
          home_team_score: 115,
          period: 4,
          postseason: false,
          season: 2021,
          status: 'Final',
          time: '',
          visitor_team_id: 13,
          visitor_team_score: 113,
        },
        min: '37:32',
        oreb: 0,
        pf: 2,
        player: {
          id: 115,
          first_name: 'Stephen',
          height_feet: 6,
          height_inches: 3,
          last_name: 'Curry',
          position: 'G',
          team_id: 10,
          weight_pounds: 190,
        },
        pts: 45,
        reb: 10,
        stl: 1,
        team: {
          id: 10,
          abbreviation: 'GSW',
          city: 'Golden State',
          conference: 'West',
          division: 'Pacific',
          full_name: 'Golden State Warriors',
          name: 'Warriors',
        },
        turnover: 6,
      },
    ],
    meta: {
      total_pages: 74,
      current_page: 1,
      next_page: 2,
      per_page: 1,
      total_count: 74,
    },
  }
}
