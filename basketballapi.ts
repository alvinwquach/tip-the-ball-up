// creating API call
export const getPlayerFromApi = async (): Promise<PlayerApi[]> => {
  const response = await fetch(
    'https://www.balldontlie.io/api/v1/players?search'
  )
  return response.json()
}

// creating API call to grab player by name
export const getPlayerFromApiByName = async (
  playerName: string
): Promise<PlayerApi[]> => {
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
  id: number
  first_name: string
  height_feet: number | null
  height_inches: number | null
  last_name: string
  position: string
  team: Team
  weight_pounds: number | null
}

export const getPlayer = async (): Promise<PlayerApi[]> => {
  return [
    {
      id: 14,
      first_name: 'Ike',
      height_feet: null,
      height_inches: null,
      last_name: 'Anigbogu',
      position: 'C',
      team: {
        id: 12,
        abbreviation: 'IND',
        city: 'Indiana',
        conference: 'East',
        division: 'Central',
        full_name: 'Indiana Pacers',
        name: 'Pacers',
      },
      weight_pounds: null,
    },
  ]
}
