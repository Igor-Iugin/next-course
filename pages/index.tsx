import type { NextPage } from 'next'
import { Rating } from '../components'


const Home: NextPage = () => {
  return (
    <>
      <Rating rating={4} />
    </>
  )
}

export default Home
