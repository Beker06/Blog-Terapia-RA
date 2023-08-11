import Layout from '@/Components/Layout'
import IntroduccionUno from '@/Components/Sections/Introduccion/IntroduccionUno'
import Portada from '@/Components/Sections/Portada'
import Prescencia from '@/Components/Sections/Prescencia'
import React from 'react'

//Esta es la pagina principal

export default function Home() {
  return (
    <>
      <Layout title={"Inicio"}>
        <div className="snap-center">
          <Portada />
        </div>
        <div className='snap-center'>
          <IntroduccionUno/>
        </div>
        <div className="snap-center">
          <Prescencia/>
        </div>
      </Layout>
    </>
  )
}
