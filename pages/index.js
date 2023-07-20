import Layout from '@/Components/Layout'
import Portada from '@/Components/Sections/Portada'
import Prescencia from '@/Components/Sections/Prescencia'
import React from 'react'

//Esta es la pagina principal

export default function Home() {
  return (
    <>
      <Layout title={"Inicio"}>
        <div class="snap-center">
          <Portada />
        </div>
        <div class="snap-center">
          <Prescencia/>
        </div>
      </Layout>
    </>
  )
}
