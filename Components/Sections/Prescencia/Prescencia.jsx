import React from 'react'
import Section from '../../Section'

const Prescencia = () => {
  return (
    <Section id="Presencia" color="white">
      <div className='flex w-full mt-[8%] justify-center'>
        <div className='flex flex-col text-white w-[70%] text-justify text-lg mx-[10%]'>
          <h1 className='uppercase text-2xl mb-6'>¿Qué es la presencia?</h1>
          <p>
            Las investigaciones sobre la VR incluyen varias descripciones de usuarios que 
            creen, al menos durante un breve periodo de tiempo, que están "dentro" y 
            "presentes" en la experiencia virtual.
          </p>
          <br/>
          <p>
            Pero, ¿qué es la presencia? Este término se utilizó por primera vez en 1992 en 
            el título de una nueva revista dedicada al estudio de la VR: Presencia: 
            Teleoperadores y Entornos Virtuales. En el primer número, Sheridan describe la 
            "presencia" como una experiencia provocada por el uso de la tecnología: "el 
            efecto que se siente al controlar objetos del mundo real a distancia, así como 
            el efecto que sienten las personas cuando interactúan y se sumergen en entornos 
            virtuales".
          </p>
          <br/>
          <p>
            Siguiendo este planteamiento, la Sociedad Internacional para la Investigación 
            de la Presencia define hoy la "presencia" (una forma abreviada del término 
            "telepresencia") como "un estado psicológico en el que, aunque parte o toda 
            la experiencia actual de un individuo es generada por y/o filtrada a través de 
            la tecnología hecha por el hombre, parte o toda la percepción del individuo no 
            reconoce con precisión el papel de la tecnología en la experiencia".
          </p>
          <br/>
          <p>
            Esta definición describe la sensación de presencia que se experimenta en la 
            VR como "presencia mediática", una función de nuestra experiencia de un medio 
            determinado. El principal resultado de este enfoque es la definición de 
            presencia de la ilusión perceptiva de no mediación: "El término 'perceptivo' 
            indica que este fenómeno implica respuestas continuas (en tiempo real) de los 
            sistemas humanos de procesamiento sensorial, cognitivo y afectivo a los objetos 
            y entidades del entorno de una persona. Se produce una "ilusión de no mediación" 
            cuando una persona no percibe o reconoce la existencia de un medio en su entorno 
            de comunicación y responde como lo haría si el medio no estuviera allí".
          </p>
        </div>
      </div>
    </Section>
  )
}

export default Prescencia;