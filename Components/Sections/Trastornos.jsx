import React from 'react'
import Section from '../Section'
import Card from '../Card'
import Otros from '../../public/Images/Trastornos/otros.png'
import Ansiedad from '../../public/Images/Trastornos/Ansiedad.jpg'
import Psicosis from '../../public/Images/Trastornos/psicosis.jpg'
import Alimenticios from '../../public/Images/Trastornos/alimenticios.jpg'
import Adicciones from '../../public/Images/Trastornos/adicciones.png'
import Autismo from '../../public/Images/Trastornos/autismo.png'
import Dolor from '../../public/Images/Trastornos/dolor.jpg'
import AnsiedadModal from '../Modals/Trastornos/AnsiedadModal'
import AlimenticiosModal from '../Modals/Trastornos/AlimenticiosModal'
import AutismoModal from '../Modals/Trastornos/AutismoModal'
import OtrosModal from '../Modals/Trastornos/OtrosModal'
import PsicosisModal from '../Modals/Trastornos/PsicosisModal'
import DolorModal from '../Modals/Trastornos/DolorModal'
import { useAdiccionesModal, useAlimenticiosModal, useAnsiedadModal, useAutismoModal, useDolorModal, useOtrosModal, usePsicosisModal } from '@/hooks/modals/useTrastornosModal'
import AdiccionesModal from '../Modals/Trastornos/AdiccionesModal'

const Trastornos = () => {

  const dolor = useDolorModal();
  const ansiedad = useAnsiedadModal();
  const psicosis = usePsicosisModal();
  const alimenticios = useAlimenticiosModal();
  const adicciones = useAdiccionesModal();
  const autismo = useAutismoModal();
  const otros = useOtrosModal();

  return (
    <Section id='Trastornos' color="white">
        <div className='flex w-full mt-[8%] justify-center'>
            <div className='flex flex-col text-white w-[70%] text-justify text-lg mx-[10%]'>
                <h1 className='uppercase text-2xl mb-6'>VR como Tratamiento Para Trastornos y Enfermedades Mentales</h1>
                <div className='grid grid-cols-4 grid-rows-2 gap-x-4 gap-y-4'>
                  <Card 
                    title='Dolor'
                    img = {Dolor}
                    onClick={dolor.onOpen}
                  />
                  <Card 
                    title='Ansiedad'
                    img = {Ansiedad}
                    onClick={ansiedad.onOpen}
                  />
                  <Card 
                    title='Psicosis'
                    img = {Psicosis}
                    onClick={psicosis.onOpen}
                  />
                  <Card 
                    title='Trastornos Alimenticios'
                    img = {Alimenticios}
                    onClick={alimenticios.onOpen}
                  />
                  <Card 
                    title='Adicciones'
                    img = {Adicciones}
                    onClick={adicciones.onOpen}
                  />
                  <Card 
                    title='Autismo'
                    img = {Autismo}
                    onClick={autismo.onOpen}
                  />
                  <Card 
                    title='Otros'
                    img = {Otros}
                    onClick={otros.onOpen}
                  />
                </div>
            </div>
        </div>
        <AdiccionesModal/>
        <AlimenticiosModal/>
        <AnsiedadModal/>
        <AutismoModal/>
        <DolorModal/>
        <OtrosModal/>
        <PsicosisModal/>
    </Section>
  )
}

export default Trastornos