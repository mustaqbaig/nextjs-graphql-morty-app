import Head from 'next/head'
import Card from '../components/Card'
import client from '../apolloClient'
import { GET_ALL_CHARACTERS } from '../queries'

export default function Home({ characters }) {
  // const { loading, error, data } = useQuery(GET_ALL_CHARACTERS)

  return (
    <div>
      <Head>
        <title>Morty GraphQL | Next.js</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <main>
        <div className="title"><span>Next/GraphQL </span>Rick and Morty Character App</div>
        <div className="row">
          {characters?.results.map(character =>
            <Card character={character} key={character.id}/>
          )}
        </div>
      </main>

      <footer>
      </footer>
    </div>
  )
}

export const getStaticProps = async () => {
  // const { data } = await client.query({
  //   query: gql`
  //       query Character {
  //           characters {
  //               results {
  //                   id
  //                   name
  //                   image
  //                   status
  //                   species
  //                   location {
  //                       name
  //                   }
  //               }
  //           }
  //       }
  //   `
  // })

  const { data } = await client.query({ query: GET_ALL_CHARACTERS })

  console.log('====><><><><><><><><><><><><><><>-==-===<>')
  console.log('====>', data)

  return {
    props: {
      characters: data?.characters
    }
  }
}