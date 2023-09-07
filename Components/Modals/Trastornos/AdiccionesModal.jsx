import { useAdiccionesModal } from '@/hooks/modals/useTrastornosModal';
import React, { useCallback, useState } from 'react'
import Modal from '../Modal';

const AdiccionesModal = () => {

    const thisModal = useAdiccionesModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4 text-white text-left">
            <p>
                La terapia en realidad virtual también se ha utilizado en el 
                tratamiento de las adicciones a drogas. Un estudio reciente 
                demostró que la terapia en realidad virtual puede ser eficaz 
                para reducir la ansiedad, el deseo y el consumo de drogas en 
                personas que luchan contra la adicción.
            </p>
            <p>
                En la terapia de adicción a drogas en realidad virtual, los 
                pacientes son expuestos a escenarios que les permiten enfrentar 
                situaciones que podrían desencadenar el deseo de consumir drogas. 
                Por ejemplo, se puede simular una fiesta donde se consumen drogas 
                o un ambiente donde las personas están consumiendo drogas en su 
                presencia. La terapia permite a los pacientes practicar habilidades 
                de afrontamiento y resistencia a la tentación en un ambiente 
                seguro y controlado.
            </p>
            <p>
                Además, la terapia en realidad virtual también puede ser útil 
                para reducir la ansiedad, el estrés y la depresión, que son 
                factores comunes que pueden contribuir a la adicción a drogas. 
                Al proporcionar a los pacientes un ambiente relajante y controlado, 
                la terapia en realidad virtual puede ayudar a reducir estos 
                síntomas y mejorar el bienestar emocional general del paciente.
            </p>
            <p>
                Aunque aún se necesita más investigación para determinar la 
                eficacia a largo plazo de la terapia en realidad virtual en el 
                tratamiento de las adicciones a drogas, los resultados iniciales 
                son prometedores y sugieren que esta técnica terapéutica puede 
                ser una herramienta valiosa para ayudar a las personas a superar 
                la adicción a drogas.
            </p>
        </div>
    )

  return (
    <Modal
        disabled={isLoading}
        isOpen = {thisModal.isOpen}
        title='Tratamiento de Adicciones'
        actionLabel='Listo'
        onClose={thisModal.onClose}
        onSubmit={onToggle}
        body = {bodyContent}
    />
  )
}

export default AdiccionesModal