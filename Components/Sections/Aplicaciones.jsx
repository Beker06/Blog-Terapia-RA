import React from 'react'
import Section from '../Section'

const Aplicaciones = () => {
  return (
    <Section id="Apliaciones" color='white'>
        <div className='flex w-full mt-[8%] justify-center'>
            <div className='flex flex-col text-white w-[70%] text-justify md:text-lg text-sm mx-[10%]'>
                <h1 className='uppercase md:text-2xl text-lg md:mb-6 mb-2'>Aplicaciones Clínicas y Recomendaciones</h1>
                <p>
                    El potencial clínico de la VR está claramente avalado por los resultados clínicos. 
                    Dos meta-revisiones recientes que evalúan más de 53 revisiones sistemáticas y 
                    meta-análisis que exploran el uso actual de la VR en psicología clínica apoyan 
                    su uso en trastornos de ansiedad, trastornos alimentarios, peso, y tratamiento del 
                    dolor, con efectos a largo plazo que se generalizan al mundo real. La VR también 
                    tiene un importante potencial de aplicación en otros ámbitos, como la psicosis y 
                    las adicciones. En los párrafos siguientes, analizaremos cómo se ha aplicado la VR 
                    en estos distintos ámbitos y los resultados clínicos obtenidos.
                </p>
            </div>
        </div>
    </Section>
  )
}

export default Aplicaciones