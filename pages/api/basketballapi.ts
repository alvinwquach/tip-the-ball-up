// creating API call
export const getStatsFromApi = async (): Promise<StatsApi[]> => {
  const response = await fetch(
    'https://www.balldontlie.io/api/v1/stats?per_page=100&start_date=2021-10-18'
  )
  return response.json()
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

export type StatsApi = {
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

export const getStats = async (): Promise<StatsApi[]> => {
  return [
    {
      id: 7367681,
      ast: 3,
      blk: 1,
      dreb: 6,
      fg3_pct: 0.0,
      fg3a: 0,
      fg3m: 0,
      fg_pct: 100.0,
      fga: 2,
      fgm: 2,
      ft_pct: 0.0,
      fta: 0,
      ftm: 0,
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
      min: '23:36',
      oreb: 0,
      pf: 0,
      player: {
        id: 224,
        first_name: 'Andre',
        height_feet: 6,
        height_inches: 6,
        last_name: 'Iguodala',
        position: 'G-F',
        team_id: 10,
        weight_pounds: 215,
      },
      pts: 4,
      reb: 6,
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
      turnover: 1,
    },
  ]
}
