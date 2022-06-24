import Head from 'next/head'
import { getAllPlayers } from '../../basketballapi'

export async function getStaticProps = async (context: any) => {
  return {
    props: {
      playerInfo;
    }
  }
}

export async function getStaticPaths() {
  const paths = getAllPlayers.map((getAllPlayer) => {
    params: { player: first_name + last_name}
  })
  return {
    paths,
    fallback: false
  }


// export const getStaticProps = async (context: any) => {
//   const playerInfo = getAllPlayers.find({})
//   return {
//     props: {
//       playerInfo,
//     },
//   }
// }

// export const getStaticPaths = async () => {
//   const paths = getAllPlayers.map((getAllPlayer) => ({
//     params: { name: id.toString() },
//   }))
//   return {
//     paths,
//     fallback: false,
//   }
// }
