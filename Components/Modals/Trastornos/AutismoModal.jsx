import React, { useCallback, useState } from 'react'
import Modal from '../Modal'
import { useAutismoModal } from '@/hooks/modals/useTrastornosModal';

const AutismoModal = () => {

    const thisModal = useAutismoModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4 text-white text-left">
            <p>
                La VR, que se utiliza en la evaluación y el tratamiento de 
                niños autistas desde 1996, se ha empleado para mejorar las 
                habilidades sociales, la comunicación no verbal y las habilidades 
                emocionales.
            </p>
            <p>
                Uno de los primeros enfoques fue el uso de la VR para el 
                entrenamiento de habilidades sociales y comunicativas. En concreto, 
                se han utilizado simulaciones sociales de RV que reproducen 
                acontecimientos de la vida real (por ejemplo, una cafetería 
                virtual, un autobús o una carretera que se cruza) para entrenar 
                a niños autistas a manejar diferentes escenarios graduados. Durante 
                la experiencia de VR, tienen que iniciar acciones sociales y 
                discursos verbales con actores sociales simulados para alcanzar 
                objetivos de entrenamiento y construir su identidad propia y 
                social. Otra área importante es el uso de la VR para mejorar las 
                habilidades emocionales. Por ejemplo, Ghanouni (2019) desarrolló 
                una biblioteca validada de historias sociales de VR centradas en 
                la toma de perspectiva que ofrecen niveles graduales de intensidad 
                y dificultad de las emociones. Este enfoque necesita adaptar 
                mejor las experiencias de VR a las habilidades de afrontamiento 
                específicas de cada niño. En un reciente ensayo controlado 
                aleatorizado, los clínicos utilizan la VR para tratar a niños 
                autistas con fobias específicas con resultados positivos.
            </p>
            <p>
                En general, los resultados disponibles sugieren que la VR es una 
                herramienta prometedora para mejorar las habilidades sociales, la 
                cognición y el funcionamiento en el autismo. Sin embargo, los 
                estudios existentes no aclaran si los niños autistas generalizan 
                las habilidades aprendidas en la vida real. Además, sigue habiendo 
                obstáculos para desarrollar experiencias de VR sólidas y fáciles 
                de usar que realmente pueden marcar la diferencia en las aulas del 
                mundo real.
            </p>
        </div>
    )

  return (
    <Modal
        disabled={isLoading}
        isOpen = {thisModal.isOpen}
        title='Autismo'
        actionLabel='Listo'
        onClose={thisModal.onClose}
        onSubmit={onToggle}
        body = {bodyContent}
    />
  )
}

export default AutismoModal