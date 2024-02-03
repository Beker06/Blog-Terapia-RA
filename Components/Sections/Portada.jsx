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
      <div className='absolute flex flex-col w-[70%] md:leading-[56px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-white md:text-[48px] text-[40px] leading-10'>
        <span className='uppercase'>Sistema de Realidad Virtual para Terapia Emocional</span>
        <div className='flex flex-row md:text-[28px] text-[24px] md:mt-6 mt-20 w-full justify-center'>
          <button className='md:px-8 px-4 md:py-2 py-1 md:mx-4 mx-2 text-black border-4  border-white rounded bg-white leading-[36px] hover:text-[#00000090]  transition duration-200 ease-in-out hover:scale-[1.05]' onClick={() => router.push('/#IntroduccionUno')}>Leer</button>
          <Link href="./Documents/Investigacion Sistema de Realidad Virtual para Terapia Emocional.pdf" download target="_blank" rel="noopener"className='md:px-8 px-4 md:py-2 py-1 md:mx-4 mx-2 border-4 bg-[#ffffff20] border-white rounded leading-[36px] hover:bg-[#0F172A] transition duration-200 ease-in-out hover:scale-[1.05]'>Descargar</Link>
        </div>
      </div>
      <div className='absolute text-white md:bottom-3 bottom-7 left-10 flex flex-col text-left md:text-lg text-xs'>
        <span>Pino Alvarez Oscar Brandon - 17210622</span>
        <span>Reyes Espinoza Eduardo - 19211716</span>
        <span>Vazquez Parra Eliam Jesus - 19211748</span>
        <span>Terrazas Rojo Miguel Arturo - 19211740</span>
        <span>Diaz Chavelas Jafet Misael - 19211628</span>
      </div>
      <div className='absolute text-white bottom-3 lg:left-3/4 sm:left-2/3 left-10 md:text-lg text-xs'>
        <span>Asesor: Miguel Angel Lopez Ramirez</span>
      </div>
    </Section>
  )
}

export default Portada