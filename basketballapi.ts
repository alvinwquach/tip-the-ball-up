// creating API call
export const getPlayerFromApi = async (): Promise<PlayerApi[]> => {
  const response = await fetch(
    'https://www.balldontlie.io/api/v1/players?search'
  )
  return response.json()
}

export const getStatsByPlayer = async (
  playerId: number
): Promise<StatsByPlayerApi[]> => {
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
export type StatsByPlayerApi = {
  data: {
    id: number,
    ast: number,
    blk: number,
    dreb: number,
    fg3_pct: number,
    fg3a: number,
    fg3m: number,
    fg_pct: number,
    fga: number,
    fgm: number,
    
  }[]
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

export const getPlayerStats = async (): Promise<StatsByPlayerApi> => {
return {
  data: [
      {
          "id": 8182497,
          "ast": 2,
          "blk": 0,
          "dreb": 5,
          "fg3_pct": 42.9,
          "fg3a": 7,
          "fg3m": 3,
          "fg_pct": 62.5,
          "fga": 16,
          "fgm": 10,
          "ft_pct": 0.0,
          "fta": 1,
          "ftm": 0,
          "game": {
              "id": 473644,
              "date": "2021-11-19T00:00:00.000Z",
              "home_team_id": 2,
              "home_team_score": 130,
              "period": 4,
              "postseason": false,
              "season": 2021,
              "status": "Final",
              "time": "",
              "visitor_team_id": 14,
              "visitor_team_score": 108
          },
          "min": "32:04",
          "oreb": 1,
          "pf": 3,
          "player": {
              "id": 237,
              "first_name": "LeBron",
              "height_feet": 6,
              "height_inches": 8,
              "last_name": "James",
              "position": "F",
              "team_id": 14,
              "weight_pounds": 250
          },
          "pts": 23,
          "reb": 6,
          "stl": 2,
          "team": {
              "id": 14,
              "abbreviation": "LAL",
              "city": "Los Angeles",
              "conference": "West",
              "division": "Pacific",
              "full_name": "Los Angeles Lakers",
              "name": "Lakers"
          },
          "turnover": 3
      }
  ],
  "meta": {
      "total_pages": 59,
      "current_page": 1,
      "next_page": 2,
      "per_page": 1,
      "total_count": 59
  }
}