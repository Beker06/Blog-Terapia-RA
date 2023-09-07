import { usePsicosisModal } from '@/hooks/modals/useTrastornosModal';
import React, { useCallback, useState } from 'react'
import Modal from '../Modal';

const PsicosisModal = () => {

    const thisModal = usePsicosisModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4 text-white text-left">
            <p>
                En los últimos 15 años, los estudios han intentado establecer la 
                seguridad del uso de la VR con individuos que experimentan psicosis y 
                comprender los mecanismos psicológicos que subyacen a la aparición y 
                el mantenimiento de los síntomas psicóticos.
            </p>
            <p>
                Como subrayan dos revisiones sistemáticas recientes, la VR se aplicó 
                por primera vez en este campo para explorar los procesos y mecanismos 
                psicológicos asociados a la aparición y el mantenimiento de la 
                psicosis. En concreto, la VR se ha utilizado como escenario controlado 
                en el que estudiar el efecto de los acontecimientos vitales adversos en 
                la respuesta en tiempo real a situaciones sociales. Mediante la manipulación 
                de la densidad de población, la densidad étnica de los avatares o incluso 
                la estatura del usuario, los investigadores pueden controlar los niveles 
                de ideación paranoide y alucinaciones auditivas.
            </p>
            <p>
                Además, mediante el uso de agentes virtuales y escenarios virtuales, 
                los investigadores pueden evaluar la capacidad funcional, la cognición 
                social y la competencia social.
            </p>
            <p>
                Todos estos estudios sugieren que la VR es un entorno seguro para 
                evaluar los síntomas psicóticos. En particular, los pacientes no 
                mostraron ningún agravamiento de los síntomas psicóticos después de 
                la exposición a la VR, y no informaron de ninguna angustia relacionada 
                con la experiencia de VR.
            </p>
        </div>
    )

  return (
    <Modal
        disabled={isLoading}
        isOpen = {thisModal.isOpen}
        title='Psicosis'
        actionLabel='Listo'
        onClose={thisModal.onClose}
        onSubmit={onToggle}
        body = {bodyContent}
    />
  )
}

export default PsicosisModal