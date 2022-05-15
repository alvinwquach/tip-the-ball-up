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

export type StatsByPlayerApi = {
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

export const getPlayerStats = async (): Promise<StatsByPlayerApi[]> => {
  return [
    {
      id: 7568694,
      ast: 3,
      blk: 0,
      dreb: 13,
      fg3_pct: 25.0,
      fg3a: 4,
      fg3m: 1,
      fg_pct: 42.1,
      fga: 19,
      fgm: 8,
      ft_pct: 86.7,
      fta: 15,
      ftm: 13,
      game: {
        id: 473475,
        date: '2021-10-28T00:00:00.000Z',
        home_team_id: 23,
        home_team_score: 110,
        period: 4,
        postseason: false,
        season: 2021,
        status: 'Final',
        time: '',
        visitor_team_id: 9,
        visitor_team_score: 102,
      },
      min: '30:58',
      oreb: 5,
      pf: 2,
      player: {
        id: 145,
        first_name: 'Joel',
        height_feet: 7,
        height_inches: 0,
        last_name: 'Embiid',
        position: 'F-C',
        team_id: 23,
        weight_pounds: 250,
      },
      pts: 30,
      reb: 18,
      stl: 1,
      team: {
        id: 23,
        abbreviation: 'PHI',
        city: 'Philadelphia',
        conference: 'East',
        division: 'Atlantic',
        full_name: 'Philadelphia 76ers',
        name: '76ers',
      },
      turnover: 4,
    },
  ]
}
