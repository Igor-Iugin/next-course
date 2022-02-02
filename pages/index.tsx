import { GetStaticProps } from 'next'
import { useState } from 'react'
import axios, { AxiosResponse } from 'axios'

import { withLayout } from '../layout/Layout'

import { MenuItem } from '../interfaces/menuInterface'


function Home({ menu, firstCategory }: HomeProps):JSX.Element {
  return (
    <ul>
      {menu.map(elem => <li key={elem._id.secondCategory}>{elem._id.secondCategory}</li>)}
    </ul>
  )
}

export default withLayout(Home)


export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0
  const { data: menu } = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
    firstCategory
  })

  return {
    props: {
      menu,
      firstCategory
    }
  }
}

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[],
  firstCategory: number
}
