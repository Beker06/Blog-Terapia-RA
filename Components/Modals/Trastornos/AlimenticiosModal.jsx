import React, { useCallback, useState } from 'react'
import Modal from '../Modal';
import { useAlimenticiosModal } from '@/hooks/modals/useTrastornosModal';

const AlimenticiosModal = () => {

    const thisModal = useAlimenticiosModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4 text-white text-left">
            <p>
                En los últimos 25 años, la VR ha ofrecido soluciones innovadoras 
                para reducir la ansiedad por la comida, mejorar la imagen corporal 
                y potenciar las habilidades de regulación emocional en los 
                trastornos de la alimentación y el peso. En particular, cuatro 
                ensayos controlados aleatorizados diferentes han demostrado en 
                seguimientos a largo plazo que la VR tenía una mayor eficacia en 
                el tratamiento de los trastornos alimentarios y la obesidad que 
                el estándar de oro en el campo, es decir, la terapia 
                cognitivo-conductual.
            </p>
            <p>
                La primera aplicación de la VR en este campo fue en la investigación 
                de la imagen corporal para explorar el concepto de imagen corporal 
                y ayudar a la evaluación de las alteraciones de la imagen corporal. 
                La posibilidad de desarrollar aplicaciones basadas en la VR que 
                exploren las representaciones corporales ha avanzado gracias a los 
                considerables progresos de la tecnología, que ahora permite utilizar 
                "avatares" cada vez más realistas e interactivos. El término "avatar" 
                hace referencia a las autorrepresentaciones virtuales en mundos 
                digitales, incluidos los mundos virtuales colaborativos en línea 
                (por ejemplo, Second Life), así como los videojuegos y los entornos 
                virtuales con fines clínicos.
            </p>
            <p>
                Normalmente, estas aplicaciones consisten en una figura humana en 
                3D cuyas partes del cuerpo pueden modificarse mediante controles 
                deslizantes. La principal ventaja de este enfoque es que el software 
                permite a los clínicos evaluar varias dimensiones o índices de la 
                imagen corporal (por ejemplo, el cuerpo percibido, el cuerpo deseado, 
                el cuerpo sano, etc.) y el peso corporal (peso real, peso subjetivo, 
                peso sano y peso deseado), todo ello en diferentes contextos.
            </p>
        </div>
    )

  return (
    <Modal
        disabled={isLoading}
        isOpen = {thisModal.isOpen}
        title='Trastornos de la Alimentacion y del Peso'
        actionLabel='Listo'
        onClose={thisModal.onClose}
        onSubmit={onToggle}
        body = {bodyContent}
    />
  )
}

export default AlimenticiosModal