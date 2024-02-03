import Section from '@/Components/Section'
import React from 'react'

const VREvolucion = () => {
  return (
    <Section id="EvolucionVR" color='white'>
        <div className='flex w-full mt-[7%] justify-center'>
            <div className='flex flex-col text-white w-[70%] text-justify md:text-lg text-xs mx-[10%] leading-4'>
                <h1 className='uppercase md:text-2xl text-lg md:mb-6 mb-2 tracking-tighter'>La evolución de la tecnología de VR</h1>
                <p className='md:block hidden'>
                    El uso de la VR en la práctica clínica ha estado limitado durante mucho tiempo 
                    por dos factores principales: la falta de usabilidad y el coste de las herramientas 
                    virtuales.
                </p>
                <br/>
                <p>
                    La primera generación de dispositivos de VR, disponible entre 1990 y 2015, se caracterizaba 
                    por la baja resolución de la pantalla, el campo de visión limitado y los diseños incómodos. 
                    Estos problemas estaban relacionados con diferentes efectos secundarios como el mareo (debido 
                    a la baja calidad de la pantalla) y los dolores de cuello (debido al peso del HMD), limitando 
                    su uso con los pacientes.
                </p>
                <br />
                <p>
                    Además, el típico sistema de VR inmersiva requería unos HMD caros, que a menudo costaban más 
                    de 10.000 dólares, combinados con ordenadores de gama alta igualmente caros y equipados con tarjetas 
                    gráficas profesionales. Por último, el desarrollo y el uso de un sistema de VR requería un alto 
                    grado de experiencia tecnológica (para diseñar el entorno y manejarlo) que normalmente no estaba 
                    disponible en los entornos clínicos.
                </p>
                <p>
                    En marzo de 2016 salió a la venta la primera generación de auriculares de realidad virtual dirigidos 
                    a los consumidores. El Oculus Rift -un HMD desarrollado y fabricado por Oculus VR, una división de 
                    Facebook Inc. y vendido por 600 dólares- marcó una nueva generación de dispositivos de VR que está 
                    revolucionando el uso de la VR en general. En pocos años, el coste de un dispositivo completo de 
                    VR -incluyendo la entrada, la salida y el cálculo de gráficos 3D- se redujo en decenas de miles de 
                    dólares hasta llegar a unos pocos cientos, el precio de los sistemas de VR autónomos más baratos.
                </p>
                <br/>
                <p className='md:block hidden'>
                    La forma más sencilla y barata de VR no comprende más que un par de lentes de aumento y una lámina 
                    de cartón. Se vende por 15-20 dólares y utiliza un smartphone estándar como rastreador y pantalla y 
                    para generar el entorno 3D. La VR basada en el móvil puso la VR al alcance incluso de los usuarios 
                    ocasionales que poseen un smartphone, ampliando su disponibilidad a la población en general.
                </p>
                <br/>
                <p className='md:block hidden'>
                    La VR basada en el móvil es especialmente adecuada para un contenido de VR específico que puede ser 
                    muy útil para la exposición basada en la VR: los vídeos de 360 grados. Estos vídeos, también conocidos 
                    como vídeos inmersivos o vídeos esféricos, son grabaciones de vídeo especiales creadas mediante una 
                    cámara con múltiples lentes de cámara o un rig de múltiples cámaras. El uso de diferentes lentes 
                    permite la grabación de todas las direcciones al mismo tiempo, dando efectivamente una visión completa 
                    de lo que está alrededor de la cámara. Una de las ventajas de proyectar un vídeo de 360 grados en un 
                    HMD de VR es que, cuando los usuarios giran la cabeza, su visión de la grabación de vídeo en vivo gira 
                    con ellos en tiempo real, lo que permite al usuario mirar alrededor en cualquier parte de la grabación 
                    filmada.
                </p>
            </div>
        </div>
    </Section>
  )
}

export default VREvolucion