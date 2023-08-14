import React from 'react'
import Section from '../../Section'
import ModalItem from '../../Modals/ModalItem'
import {useAdiccionesModal, useAnsiedadModal, useDolorAyCModal, useEstresModal, useFobiasMiedosModal} from '@/hooks/modals/useIntroducionModal'
import FobiasMiedosModal from '../../Modals/Introduccion/FobiasMiedosModal'
import EstresModal from '../../Modals/Introduccion/EstresModal'
import AnsiedadModal from '@/Components/Modals/Introduccion/AnsiedadModal'
import DolorAyCModal from '@/Components/Modals/Introduccion/DolorAyCModal'
import AdiccionesModal from '@/Components/Modals/Introduccion/AdiccionesModal'

const IntroduccionUno = () => {

  const fobiasMiedosModal = useFobiasMiedosModal()
  const estresModal = useEstresModal();
  const ansiedadModal = useAnsiedadModal();
  const dolorAgudoyCronicoModal = useDolorAyCModal();
  const adiccionesModal = useAdiccionesModal();

  return (
    <Section id="IntroduccionUno" color='white'>
      <div className='flex w-full mt-[8%]'>
        <div className='flex flex-col text-white w-[70%] text-justify text-lg mx-[10%]'>
          <h1 className='uppercase text-2xl mb-6'>Introduccion</h1>
          <p>
          La Realidad Virtual es una tecnología que ha pasado de ser una idea futurista a 
          formar parte de nuestra vida cotidiana en la actualidad, ya que se utiliza en 
          diferentes ámbitos como videojuegos, medicina y educación, entre otros. 
          Aunque muchos la relacionan con películas de ciencia ficción, la Realidad Virtual 
          es una herramienta real y efectiva en la psicología. En los últimos años, 
          aplicaciones como Phobius y programas profesionales como Psious han permitido a 
          personas con fobias superar sus miedos a través de esta tecnología. En Estados 
          Unidos, la Realidad Virtual se utilizaba de manera efectiva para el tratamiento 
          de trastornos psicológicos en veteranos de guerra. La Realidad Virtual en la 
          psicología tiene como objetivo reflejar un mundo inmersivo e interactivo para 
          realizar terapias lo más realistas posibles junto a los pacientes, por lo que 
          su éxito depende de lo bien que se simula la experiencia del mundo real. 
          Actualmente, cualquiera puede hacer uso de esta herramienta tanto de forma 
          individual como en el seno de un tratamiento psicológico controlado por un 
          especialista, siempre y cuando cuente con las gafas especiales necesarias para ello.
          </p>
          <br/>
          <p>
            Con relación a esto, diversos estudios al respecto de la aplicación de realidad 
            virtual en la psicología encontraron que estas extremidades digitales pueden 
            parecer indistinguibles a las que tenemos en el mundo real. Tanto es así que 
            se demostró que a través de estos sistemas de realidad virtual pueden inducir 
            respuestas fisiológicas y psicológicas de la misma manera que al afrontar una 
            situación similar en nuestro día a día. Existen una serie de casos psicológicos 
            en los cuales un tratamiento de realidad virtual puede ser muy efectivo. Según 
            los psicólogos, se recomienda usar la realidad virtual en la psicología para 
            los siguientes casos:
          </p>
          <div className='mt-8'>
            <ModalItem
              text = 'Fobias y Miedos'
              onClick={fobiasMiedosModal.onOpen}
            />
            <ModalItem
              text = 'Estres'
              onClick={estresModal.onOpen}
            />
            <ModalItem
              text = 'Transtornos de Ansiedad'
              onClick={ansiedadModal.onOpen}
            />
            <ModalItem
              text = 'Dolor Agudo y Cronico'
              onClick={dolorAgudoyCronicoModal.onOpen}
            />
            <ModalItem
              text = 'Adicciones'
              onClick={adiccionesModal.onOpen}
            />
          </div>
        </div>
      </div>
      <FobiasMiedosModal/>
      <EstresModal/>
      <AnsiedadModal/>
      <DolorAyCModal/>
      <AdiccionesModal/>
    </Section>
  )
}

export default IntroduccionUno