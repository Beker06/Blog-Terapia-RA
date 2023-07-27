import React from 'react'
import Section from '../Section'
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Portada = () => {
  
  const router = useRouter();

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
      <div className='absolute flex flex-col w-[70%] leading-[56px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white text-[48px]'>
        <span className='uppercase'>Sistema de Realidad Virtual para Terapia Emocional</span>
        <div className='flex flex-row text-[28px] mt-6 w-full justify-center'>
          <button className='px-8 py-2 mx-4 text-black border-4 border border-white rounded bg-white leading-[36px] hover:text-[#00000090]  transition duration-200 ease-in-out hover:scale-[1.05]' onClick={() => router.push('/#IntroduccionUno')}>Leer</button>
          <Link href="./Documents/Investigacion Sistema de Realidad Virtual para Terapia Emocional.pdf" download target="_blank" rel="noopener"className='px-8 py-2 mx-4 border-4 bg-[#ffffff20] border-white rounded leading-[36px] hover:bg-[#0F172A] transition duration-200 ease-in-out hover:scale-[1.05]'>Descargar</Link>
        </div>
        
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