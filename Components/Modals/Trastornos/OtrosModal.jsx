import React, { useCallback, useState } from 'react'
import Modal from '../Modal'
import { useOtrosModal } from '@/hooks/modals/useTrastornosModal';

const OtrosModal = () => {

    const thisModal = useOtrosModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4 text-white text-left">
            <p>
                Los protocolos e instrumentos de VR mencionados anteriormente 
                no son exhaustivos en cuanto a las distintas aplicaciones en la 
                salud mental. Sin embargo, las pruebas de los efectos de la VR 
                en otras enfermedades mentales son escasas, y son frecuentes los 
                fallos metodológicos y/o las insuficiencias en los informes.
            </p>
            <p>
                Otro campo en el que se ha utilizado la VR es la evaluación y el 
                tratamiento de los trastornos sexuales. En este campo, la 
                integración de la VR en la terapia psicodinámica para la disfunción 
                eréctil y la eyaculación precoz logró resultados preliminares 
                interesantes, incluso en una pequeña serie de casos sin condiciones 
                de control. Además, Renaud y sus colegas utilizaron con éxito la 
                exposición de la RV a personajes virtuales que representan 
                estímulos sexuales para evaluar las preferencias sexuales 
                desviadas (por ejemplo, la pedofilia).
            </p>
            <p>
                Otra área notable es la depresión. Falconer y sus colegas 
                exploraron el intercambio de cuerpos -el sentimiento ilusorio de 
                propiedad de un cuerpo virtual con una forma y/o tamaño 
                diferentes- para aumentar el nivel de compasión en pacientes 
                deprimidos. Otros investigadores utilizaron exergames basados en 
                la VR (por ejemplo, ejercicios en cinta de correr o bicicleta 
                estática basados en la VR) para reducir los síntomas depresivos. 
                En ambos casos, los resultados fueron alentadores, aunque los 
                diseños y la metodología de los estudios no permiten hacer una 
                afirmación concluyente sobre la eficacia de estos enfoques.
            </p>
        </div>
    )

  return (
    <Modal
        disabled={isLoading}
        isOpen = {thisModal.isOpen}
        title='Otros Trastornos'
        actionLabel='Listo'
        onClose={thisModal.onClose}
        onSubmit={onToggle}
        body = {bodyContent}
    />
  )
}

export default OtrosModal