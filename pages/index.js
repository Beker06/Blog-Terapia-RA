import Layout from '@/Components/Layout'
import Aplicaciones from '@/Components/Sections/Aplicaciones'
import ConclusionDos from '@/Components/Sections/Conclusion/ConclusionDos'
import ConclusionUno from '@/Components/Sections/Conclusion/ConclusionUno'
import Futuras from '@/Components/Sections/Futuras'
import IntroduccionDos from '@/Components/Sections/Introduccion/IntroduccionDos'
import IntroduccionTres from '@/Components/Sections/Introduccion/IntroduccionTres'
import IntroduccionUno from '@/Components/Sections/Introduccion/IntroduccionUno'
import Portada from '@/Components/Sections/Portada'
import Neurociencia from '@/Components/Sections/Prescencia/Neurociencia'
import Prescencia from '@/Components/Sections/Prescencia/Prescencia'
import PresenciaDos from '@/Components/Sections/Prescencia/PresenciaDos'
import Referencias from '@/Components/Sections/Referencias'
import Trastornos from '@/Components/Sections/Trastornos'
import VREvolucion from '@/Components/Sections/VR/VREvolucion'
import VRInmersiva from '@/Components/Sections/VR/VRInmersiva'
import VRSimulacion from '@/Components/Sections/VR/VRSimulacion'
import Ventajas from '@/Components/Sections/Ventajas'
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
        <div className="snap-center">
          <PresenciaDos/>
        </div>
        <div className="snap-center">
          <Neurociencia/>
        </div>
        <div className="snap-center">
          <Ventajas/>
        </div>
        <div className='snap-center'>
          <Futuras/>
        </div>
        <div className="snap-center">
          <Trastornos/>
        </div>
        <div className="snap-center">
          <Aplicaciones/>
        </div>
        <div className="snap-center">
          <ConclusionUno/>
        </div>
        <div className="snap-center">
          <ConclusionDos/>
        </div>
        <div className="snap-center">
          <Referencias/>
        </div>
      </Layout>
    </>
  )
}
