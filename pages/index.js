import Layout from '@/Components/Layout'
import IntroduccionDos from '@/Components/Sections/Introduccion/IntroduccionDos'
import IntroduccionTres from '@/Components/Sections/Introduccion/IntroduccionTres'
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
        <div className='snap-center'>
          <IntroduccionDos/>
        </div>
        <div className='snap-center'>
          <IntroduccionTres/>
        </div>
        <div className="snap-center">
          <Prescencia/>
        </div>
      </Layout>
    </>
  )
}
