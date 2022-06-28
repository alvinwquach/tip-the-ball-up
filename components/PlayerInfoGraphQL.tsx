import React from 'react'
import { GetPlayerNameQuery } from '../src/generated/graphql'

type PlayerPositionProps = {
  /**
   * Position = Shorthand of Player Position
   */
  position?: string | null
}

/**
 * Short-hand to long-hand description
 */
const positionToDescription: { [key: string]: string | undefined } = {
  C: 'Center',
  F: 'Forward',
  G: 'Guard',
  'C-F': 'Center-Forward',
  'F-C': 'Forward-Center',
  'F-G': 'Forward-Guard',
  'G-F': 'Guard-Forward',
  '': 'Unknown',
}

/**
 * given a player's position, renders Guard also handling missing information
 * @param param0
 * @returns
 */

function PlayerPosition({ position }: PlayerPositionProps) {
  if (position === null || position === undefined) {
    return <dd>Unknown</dd>
  }
  /**
   * given a player's position, renders long-hand position
   */
  const description = positionToDescription[position]
  return <dd>{description}</dd>
}

type PlayerHeightProps = {
  /**
   * Feet = height in feet
   */
  feet?: number | null
  /**
   * Inches = height in inches
   */
  inches?: number | null
}
/**
 * given a player's height, renders 5'11" also handling missing information
 * @param param0
 * @returns
 */
function PlayerHeight({ feet, inches }: PlayerHeightProps) {
  if (
    feet === undefined ||
    feet === null ||
    inches === undefined ||
    inches === null
  ) {
    return <dd>Unknown</dd>
  }
  return (
    <dd>
      {feet}' {inches}"
    </dd>
  )
}

type PlayerInfoGraphQLProps = {
  /**
   * Queries for the player by name
   */
  playername: GetPlayerNameQuery
}

/**
 * passes player data to player information
 * @param param0
 * @returns
 */
function PlayerInfoGraphQL({ playername }: PlayerInfoGraphQLProps) {
  const player = playername.getplayerbyname
  // Only render player if player is not undefined (return player ? (:) null
  return player ? (
    <>
      <dl>
        <dd>
          {player.first_name} {player.last_name}
        </dd>
        {/* Player Height will return a human readable string aka 6'7", if undefined, will return Unknown*/}
        <PlayerHeight feet={player.height_feet} inches={player.height_inches} />
        <dd>{player.weight_pounds}</dd>
        {/* Player Position will return the longhand position, C => Center, and if undefoned or null, will return unknown */}
        <PlayerPosition position={player.position} />
        <dd>{player.team?.full_name}</dd>
        <dd>{player.team?.conference}</dd>
        <dd>{player.team?.division}</dd>
      </dl>
    </>
  ) : null
}

export default PlayerInfoGraphQL
