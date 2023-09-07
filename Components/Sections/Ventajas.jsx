import React from 'react'
import Section from '../Section'
import ModalItem from '../Modals/ModalItem'
import CosteModal from '../Modals/Ventajas/CosteModal'
import DisponibilidadModal from '../Modals/Ventajas/DisponibilidadModal'
import RealismoModal from '../Modals/Ventajas/RealismoModal'
import BeyondModal from '../Modals/Ventajas/BeyondModal'
import EficaciaModal from '../Modals/Ventajas/EficaciaModal'
import PrivacidadModal from '../Modals/Ventajas/PrivacidadModal'
import CompromisoModal from '../Modals/Ventajas/CompromisoModal'
import ControlModal from '../Modals/Ventajas/ControlModal'
import SeguridadModal from '../Modals/Ventajas/SeguridadModal'
import { useBeyondModal, useCompromisoModal, useControlModal, useCosteModal, useDisponibilidadModal, useEficaciaModal, usePrivacidadModal, useRealismoModal, useSeguridadModal } from '@/hooks/modals/useVentajasModal'

const Ventajas = () => {

    const coste = useCosteModal();
    const disponibilidad = useDisponibilidadModal();
    const compromiso = useCompromisoModal();
    const control = useControlModal();
    const realismo = useRealismoModal();
    const beyond = useBeyondModal();
    const eficacia = useEficaciaModal();
    const seguridad = useSeguridadModal();
    const privacidad = usePrivacidadModal()

  return (
    <Section id='Ventajas' color='white'>
        <div className='flex w-full mt-[8%] justify-center'>
            <div className='flex flex-col text-white w-[70%] text-justify text-lg mx-[10%]'>
                <h1 className='uppercase text-2xl mb-6'>Las ventajas de la simulación en la práctica clínica</h1>
                <p>
                    El aprendizaje experimental tiene una larga historia 
                    como técnica terapéutica, y el poder de simulación de 
                    la VR la convierte en la herramienta perfecta para el 
                    aprendizaje experimental. La VR permite a los pacientes 
                    aprender a través de la reflexión sobre el hacer. Como 
                    señalan, "una de las razones por las que es tan difícil 
                    conseguir que la gente actualice sus suposiciones es que 
                    el cambio suele requerir un paso previo: reconocer la 
                    distinción entre una suposición y una percepción. Hasta 
                    que se revelan como falaces, las suposiciones constituyen 
                    el mundo; parecen percepciones, y mientras lo sean, se 
                    resisten al cambio". A través de la experiencia de VR, 
                    es más fácil para el terapeuta demostrar al paciente que 
                    lo que parece un hecho es en realidad un resultado de su 
                    mente. Una vez que se entiende este concepto, se pueden 
                    cuestionar más fácilmente las suposiciones individuales 
                    inadaptadas.
                </p>
                <br/>
                <p>
                    La VR también puede describirse como un sistema imaginal 
                    avanzado: una forma experiencial de imágenes que es tan 
                    eficaz como la realidad para inducir respuestas emocionales. 
                    Este resultado ha sido demostrado por múltiples estudios. 
                    Reprodujeron el experimento de Stanley Milgram de los años 
                    sesenta utilizando la VR: se pidió a la muestra seleccionada 
                    que administrara una prueba de memoria a un humano virtual 
                    femenino (avatar) y que le diera una "descarga eléctrica" 
                    en caso de respuesta incorrecta, aumentando el voltaje cada 
                    vez. Durante el experimento de VR, al igual que en el 
                    original, el avatar respondió a las descargas eléctricas 
                    con un malestar creciente, exigiendo finalmente la 
                    finalización del experimento. Sus resultados confirman la 
                    eficacia simulativa de la VR: aunque todos los participantes 
                    sabían con certeza que ni el avatar ni las descargas eran 
                    reales, respondieron a la situación a nivel subjetivo, 
                    conductual y fisiológico como si fuera real.
                </p>
                <br/>
                <p>
                    La VR también es capaz de inducir respuestas emocionales en 
                    pacientes clínicos. Como se describe más adelante, numerosos 
                    estudios han demostrado que la VR es capaz de aumentar la 
                    ansiedad reportada subjetivamente en los participantes 
                    fóbicos que se enfrentan a una situación virtual amenazante, 
                    de forma similar a los efectos experimentados en condiciones 
                    en vivo. En consecuencia, como ha demostrado un reciente 
                    meta-análisis, la VR es un medio eficaz e igual para la terapia 
                    de exposición.
                </p>
                <br/>
                <p>
                    Sin embargo, la VR tiene ventajas sobre la exposición:
                </p>
                <div className='flex w-auto mt-2'>
                    <div className='pr-10'>
                        <ModalItem
                            text = 'Coste'
                            onClick={coste.onOpen}
                        />
                        <ModalItem
                            text = 'Disponibilidad'
                            onClick={disponibilidad.onOpen}
                        />
                        <ModalItem
                            text = 'Compromiso'
                            onClick={compromiso.onOpen}
                        />
                    </div>
                    <div className='pr-10'>
                        <ModalItem
                            text = 'Control'
                            onClick={control.onOpen}
                        />
                        <ModalItem
                            text = 'Realismo y presencia'
                            onClick={realismo.onOpen}
                        />
                        <ModalItem
                            text = 'Ir mas alla de la realidad'
                            onClick={beyond.onOpen}
                        />
                    </div>
                    <div className='pr-10'>
                        <ModalItem
                            text = 'Eficacia personal'
                            onClick={eficacia.onOpen}
                        />
                        <ModalItem
                            text = 'Seguridad'
                            onClick={seguridad.onOpen}
                        />
                        <ModalItem
                            text = 'Privacidad y confidencialidad'
                            onClick={privacidad.onOpen}
                        />
                    </div>
                </div>
            </div>
        </div>
        <CosteModal/>
        <DisponibilidadModal/>
        <CompromisoModal/>
        <ControlModal/>
        <RealismoModal/>
        <BeyondModal/>
        <EficaciaModal/>
        <SeguridadModal/>
        <PrivacidadModal/>
    </Section>
  )
}

export default Ventajas