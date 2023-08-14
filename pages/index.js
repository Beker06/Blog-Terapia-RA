import Layout from '@/Components/Layout'
import IntroduccionDos from '@/Components/Sections/Introduccion/IntroduccionDos'
import IntroduccionTres from '@/Components/Sections/Introduccion/IntroduccionTres'
import IntroduccionUno from '@/Components/Sections/Introduccion/IntroduccionUno'
import Portada from '@/Components/Sections/Portada'
import Prescencia from '@/Components/Sections/Prescencia'
import VREvolucion from '@/Components/Sections/VR/VREvolucion'
import VRInmersiva from '@/Components/Sections/VR/VRInmersiva'
import VRSimulacion from '@/Components/Sections/VR/VRSimulacion'
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
        <div className='snap-center'>
          <VRInmersiva/>
        </div>
        <div className='snap-center'>
          <VREvolucion/>
        </div>
        <div className='snap-center'>
          <VRSimulacion/>
        </div>
        <div className="snap-center">
          <Prescencia/>
        </div>
      </Layout>
    </>
  )
}
