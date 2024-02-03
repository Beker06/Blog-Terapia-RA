import Section from '@/Components/Section'
import React from 'react'

const VRSimulacion = () => {
    return (
        <Section id="SimulacionVR" color='white'>
            <div className='flex w-full mt-[8%] justify-center'>
                <div className='flex flex-col text-white w-[70%] text-justify md:text-lg text-[13px] mx-[10%] leading-4'>
                    <h1 className='uppercase md:text-2xl text-lg md:mb-6 mb-2 leading-5' >La VR como simulación de la realidad</h1>
                    <p>
                        En el párrafo anterior, la VR se ha descrito como un conjunto de tecnologías 
                        de fantasía: un sistema de visualización interactiva en 3D (un ordenador, una 
                        consola de juegos o un teléfono inteligente) apoyado por uno o varios rastreadores 
                        de posición y una pantalla montada en la cabeza. Sin embargo, la VR es más que 
                        un conjunto de tecnologías. La palabra "realidad virtual" comprende dos palabras: 
                        "virtual" (casi o casi como se describe) y "realidad" (el estado real de las cosas). 
                        En consecuencia, podemos afirmar que el término "realidad virtual" significa 
                        básicamente "casi realidad" o "casi realidad", lo que sugiere que la VR es una 
                        forma de simulación de la realidad.
                    </p>
                    <br/>
                    <p>
                        Desde este punto de vista, la VR puede definirse como "una forma avanzada de interfaz 
                        persona-ordenador que permite al usuario interactuar y sumergirse en un entorno 
                        generado por ordenador de forma natural". Desde un punto de vista cognitivo, la 
                        VR es principalmente una experiencia subjetiva que hace creer al usuario que está 
                        allí y que la experiencia es real. En concreto, lo que distingue a la RV de otros 
                        medios es la sensación de presencia: el sentimiento de "estar ahí" dentro de la 
                        experiencia virtual producida por la tecnología.
                    </p>
                </div>
            </div>
        </Section>
    )
}

export default VRSimulacion