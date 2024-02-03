import Section from '@/Components/Section'
import React from 'react'

const VRInmersiva = () => {
  return (
    <Section id="VR" color='white'>
        <div className='flex w-full mt-[8%] justify-center'>
            <div className='flex flex-col text-white w-[70%] text-justify md:text-lg text-xs mx-[10%]'>
                <h1 className='uppercase md:text-2xl text-lg md:mb-6 mb-2'>VR inmersiva y no inmersiva</h1>
                <p>
                    La tecnología de VR se suele clasificar como inmersiva o no inmersiva.
                </p>
                <br/>
                <p>
                    En general, una tecnología de VR es inmersiva cuando es capaz de separar 
                    sensorialmente al usuario del mundo físico y sustituir su flujo sensorial 
                    por el escenario simulado generado por el ordenador.
                </p>
                <br/>
                <p>
                    Las pantallas montadas en la cabeza (HMD) son la tecnología de RV inmersiva 
                    más común. Ocluyen cualquier contacto visual con el mundo exterior, y la 
                    pantalla interna lo sustituye por imágenes generadas por ordenador. Gracias 
                    a los sensores integrados en el HMD, la imagen generada por ordenador se 
                    adapta dinámicamente a las diferentes posiciones de visión.
                </p>
            </div>
        </div>
    </Section>
  )
}

export default VRInmersiva