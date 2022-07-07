import { promises as fs } from 'fs'
import path from 'path'
import { PagePlayer } from './basketballapi'

const filename = 'players.db'

export const playerCache = {
  cache: {
    get: async (): Promise<PagePlayer[]> => {
      /* generating location of file, cwd = current working directory */
      const data = await fs.readFile(path.join(process.cwd(), filename))
      // after it reads, parsed json
      const players: PagePlayer[] = JSON.parse(data as unknown as string)
      return players
    },
    set: async (players: PagePlayer[]) => {
      return await fs.writeFile(
        path.join(process.cwd(), filename),
        JSON.stringify(players)
      )
    },
  },
}

export default playerCache
