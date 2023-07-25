import React from 'react'
import Section from '../Section'

const Portada = () => {
  
  return (
    <Section id="Portada" color="white">
      <video
        slot='background'
        className="object-center object-cover h-full w-full blur-md"
        autoPlay
        muted
        loop
        src="/Videos/smoke.webm">
      </video>
      <div className='absolute w-[70%] leading-[56px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[48px]'>
        <span className='uppercase'>Sistema de Realidad Virtual para Terapia Emocional</span>
      </div>
      <div className='absolute text-white bottom-3 left-10 flex flex-col text-left'>
        <span>Pino Alvarez Oscar Brandon - 17210622</span>
        <span>Reyes Espinoza Eduardo - 19211716</span>
        <span>Vazquez Parra Eliam Jesus - 19211749</span>
        <span>Terrazas Rojo Miguel Arturo - 19211740</span>
        <span>Diaz Chavelas Jafet Misael - 19211628</span>
      </div>
      <div className='absolute text-white bottom-3 right-10'>
        <span>Asesor: Miguel Angel Lopez Ramirez</span>
      </div>
    </Section>
  )
}

export default Portada