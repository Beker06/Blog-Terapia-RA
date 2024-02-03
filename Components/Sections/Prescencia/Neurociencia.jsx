import Section from '@/Components/Section'
import React from 'react'

const Neurociencia = () => {
  return (
    <Section id="Neurociencia" color="white">
      <div className='flex w-full mt-[8%] justify-center'>
        <div className='flex flex-col text-white w-[70%] text-justify md:text-lg text-xs mx-[10%]'>
          <h1 className='uppercase md:text-2xl text-lg md:mb-6 mb-2 tracking-tight leading-5'>La Neurociencia de la Presencia</h1>
          <p>
            La "codificación predictiva" es una hipótesis cada vez más popular en la 
            neurociencia que sugiere que nuestro cerebro crea activamente un modelo interno 
            (simulación) del cuerpo y del espacio que lo rodea. Este modelo se utiliza para 
            proporcionar predicciones sobre la entrada sensorial esperada y para minimizar 
            el número de errores de predicción (o "sorpresa").
          </p>
          <br/>
          <p>
            En concreto, para interactuar eficazmente con el mundo, nuestro cerebro crea una 
            simulación encarnada del cuerpo que refleja sus estados futuros esperados 
            (intenciones y emociones). Esta simulación tiene dos características principales. 
            En primer lugar, es una simulación de experiencias sensoriales-motoras -los tipos 
            de estas experiencias incluyen información visceral/autonómica (interoceptiva), 
            motora (propioceptiva) y sensorial (por ejemplo, visual, auditiva). En segundo 
            lugar, las simulaciones encarnadas se basan en las expectativas del sujeto y 
            reactivan las redes neuronales multimodales que han producido previamente el 
            efecto simulado/esperado. Un objetivo crítico de este proceso es minimizar el 
            promedio de sorpresa (es decir, la disparidad entre las intenciones y los 
            efectos de ponerlas en práctica) en las diferentes representaciones y aprender 
            a modelar y predecir mejor los contenidos entrantes. En otras palabras, la 
            simulación encarnada se ajusta en función de la concordancia entre la actividad 
            sensorial percibida (percepción) y los contenidos de las simulaciones utilizadas 
            para predecir los efectos del ser en el mundo del individuo.
          </p>
          <br className='md:block hidden'/>
          <p className='md:block hidden'>
            La realidad virtual funciona de manera similar: utiliza la tecnología para crear 
            una experiencia virtual que los individuos pueden manipular y explorar como si 
            estuvieran en ella. En otras palabras, la tecnología de la VR intenta predecir 
            las consecuencias sensoriales de las acciones de los usuarios mostrándoles el 
            mismo resultado esperado por nuestros cerebros en el mundo real. Como indicaba 
            Riva et al. (2019b): "Para lograrlo, al igual que el cerebro, el sistema de VR 
            mantiene un modelo (simulación) del cuerpo y del espacio que lo rodea. Esta 
            predicción se utiliza luego para proporcionar la entrada sensorial esperada 
            mediante el hardware de VR. Obviamente, para ser realista, el modelo de VR intenta 
            imitar el modelo cerebral en la medida de lo posible: cuanto más se parezca el 
            modelo de VR al modelo cerebral, más se sentirá el individuo presente en el mundo 
            de la VR.
          </p>
        </div>
      </div>
    </Section>

  )
}

export default Neurociencia