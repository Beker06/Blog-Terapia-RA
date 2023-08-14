import DispositivosSeguimientoModal from '@/Components/Modals/Introduccion/DispositivosSeguimientoModal';
import DispositivosSenalizacionModal from '@/Components/Modals/Introduccion/DispositivosSenalizacionModal';
import ModalItem from '@/Components/Modals/ModalItem';
import Section from '@/Components/Section'
import { useDispositivosSeguimientoModal, useDispositivosSenalizacionModal } from '@/hooks/modals/useIntroducionModal'
import React from 'react'

const IntroduccionTres = () => {

  const dispositivosSeguimiento = useDispositivosSeguimientoModal();
  const dispositivosSenalizacion =useDispositivosSenalizacionModal();

  return (
    <Section id="IntroduccionTres" color="white">
      <div className='flex w-full mt-[8%]'>
        <div className='flex flex-col text-white w-[70%] text-justify text-lg mx-[10%]'>
          <p>
            Para muchos médicos, la realidad virtual (VR) es principalmente 
            un conjunto de tecnologías de lujo: un ordenador o dispositivo 
            móvil con una tarjeta gráfica capaz de realizar una visualización 
            interactiva en 3D, controladores y una pantalla montada en la 
            cabeza que incorpora uno o varios rastreadores de posición. 
            Los rastreadores detectan la posición y orientación del usuario 
            y comunican esta información al ordenador, que actualiza las 
            imágenes para su visualización en tiempo real.
          </p>
          <br/>
          <p>
            Esta descripción nos permite identificar claramente los componentes 
            tecnológicos clave de un sistema de VR: dispositivos de entrada, 
            dispositivos de salida y el escenario simulado (es decir, el 
            entorno virtual).
          </p>
          <br/>
          <p>
            Los dispositivos de entrada incluyen todos los sensores y 
            rastreadores que capturan las acciones del usuario (por ejemplo, 
            los movimientos de la cabeza y de las manos) para permitirle 
            interactuar con el entorno virtual. De hecho, hay muchos dispositivos 
            de entrada diferentes que pueden utilizarse en un sistema de VR:
          </p>
          <div className='mt-8 mb-8'>
            <ModalItem
              text = 'Dispositivos de Seguimiento'
              onClick={dispositivosSeguimiento.onOpen}
            />
            <ModalItem
              text = 'Dispositivos de señalizacion'
              onClick={dispositivosSenalizacion.onOpen}
            />
          </div>
          <p>
            Los dispositivos de salida incluyen todas las tecnologías que 
            proporcionan al usuario información continua generada por el ordenador. 
            Aunque la modalidad sensorial más importante para la mayoría de las 
            aplicaciones clínicas de la VR es el canal visual, los sistemas de VR 
            más avanzados también ofrecen información auditiva, olfativa y 
            háptica (táctil).
          </p>
          <br/>
          <p>
            Por último, el escenario simulado es el entorno virtual (VE) 3D generado 
            por ordenador. Los VE están diseñados para ser explorados, de modo que 
            los usuarios pueden interactuar (por ejemplo, mover, empujar, coger, 
            girar, etc.) con sus contenidos. Los entornos virtuales multiusuario 
            (MUVE) permiten que dos o más usuarios compartan el mismo escenario 
            simulado. Para permitir la comunicación e interacción entre usuarios, 
            los MUVEs utilizan avatares, que son representaciones gráficas 
            personalizadas de los individuos que son controlados directamente por 
            ellos en tiempo real. Los agentes virtuales encarnados, en cambio, son 
            representaciones gráficas de los individuos controladas por el propio 
            ordenador mediante un programa de inteligencia artificial.
          </p>
        </div>
      </div>
      <DispositivosSeguimientoModal/>
      <DispositivosSenalizacionModal/>
    </Section>
  )
}

export default IntroduccionTres