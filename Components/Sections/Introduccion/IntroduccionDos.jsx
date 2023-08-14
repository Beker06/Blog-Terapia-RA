import ModalItem from '@/Components/Modals/ModalItem'
import Section from '@/Components/Section'
import React from 'react'

const IntroduccionDos = () => {
  return (
    <Section id="IntroduccionDos" color="white">
        <div className='flex w-full mt-[8%]'>
        <div className='flex flex-col text-white w-[70%] text-justify text-lg mx-[10%]'>

          <p>
            En comparación a algunos de los tratamientos de la 'psicología tradicional', 
            la realidad virtual tiene los siguientes beneficios para nuestra salud mental. 
            Así pues, también se muestran generosos beneficios de la realidad virtual en 
            la psicología, los cuáles se les hará mención más adelante en el documento.
          </p>
          <br/>
          <p>
            La Realidad Virtual (VR) es un entorno de escenas y objetos de apariencia 
            real —generado mediante tecnología informática— que crea en el usuario la 
            sensación de estar inmerso en él. Dicho entorno se contempla a través de un 
            dispositivo conocido como gafas o casco de Realidad Virtual. Gracias a la VR 
            podemos sumergirnos en videojuegos como si fuéramos los propios personajes, 
            aprender a operar un corazón o mejorar la calidad de un entrenamiento 
            deportivo para obtener el máximo rendimiento.
          </p>
          <br/>
          <p>
            Esto, que puede parecer extremadamente futurista, no tiene un origen tan 
            reciente como podríamos pensar. De hecho, muchos consideran que uno de los 
            primeros dispositivos de Realidad Virtual fue la denominada Sensorama, una 
            máquina con asiento incorporado que reproducía películas en 3D, emanaba 
            olores y genera vibraciones para hacer la experiencia lo más vívida posible. 
            El invento se remonta nada más y nada menos que a mediados de los años 50. 
            A partir de ahí, el desarrollo tecnológico y de software en los años siguientes 
            trajo consigo las evoluciones pertinentes tanto en dispositivos como en el 
            diseño de interfaces.
          </p>
          <br/>
          <p>
            Aunque el término realidad virtual puede utilizarse para describir diferentes 
            tipos de experiencias inmersivas o de realidad alterada, no es lo mismo que 
            la realidad aumentada.
          </p>
          <div className='mt-8'>
            {/* <ModalItem
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
            /> */}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default IntroduccionDos