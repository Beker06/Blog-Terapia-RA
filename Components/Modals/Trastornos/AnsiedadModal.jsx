import React, { useCallback, useState } from 'react'
import Modal from '../Modal'
import { useAnsiedadModal } from '@/hooks/modals/useTrastornosModal';

const AnsiedadModal = () => {

    const thisModal = useAnsiedadModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4 text-white text-left">
            <p>
                Según las directrices de la Asociación Americana de Psicología 
                para tratamientos con apoyo empírico, las terapias basadas en la 
                exposición pueden considerarse un tratamiento de referencia para 
                el trastorno obsesivo-compulsivo, estrés postraumático, pánico 
                (TP), las fobias específicas y el trastorno de ansiedad social.
            </p>
            <p>
                Sin embargo, sólo un pequeño grupo de individuos con trastornos 
                de ansiedad recibe este tratamiento; la tecnología VR puede 
                aumentar el número de pacientes tratados con este enfoque.
            </p>
            <p>
                Como ya se ha dicho, la VR puede describirse como un sistema 
                imaginal avanzado, una forma experimental de imaginar que es 
                tan eficaz como la realidad a la hora de inducir respuestas 
                emocionales. Esta característica hace que la terapia de exposición 
                con VR (VRET) sea la herramienta perfecta para difundir la terapia 
                de exposición. Además, la VRET ofrece múltiples ventajas sobre 
                la exposición en vivo -coste, disponibilidad, seguridad, etc.- que 
                ya hemos comentado anteriormente.
            </p>
            <p>
                Un análisis reciente confirma los fuertes efectos terapéuticos de 
                la terapia basada en la exposición a la VR para los trastornos de 
                ansiedad: La VRET mostró un gran tamaño del efecto en comparación con 
                las condiciones de lista de espera y un tamaño del efecto de medio a 
                grande en comparación con los controles psicológicos. Además, VRET no 
                fue significativamente más o menos eficaz que la exposición in vivo. 
                Un estudio reciente que examinó las tasas de deterioro de los 
                tratamientos basados en la VR para los trastornos de ansiedad mostró 
                que el número de pacientes deteriorados coincidió con otros enfoques 
                terapéuticos y que es menos probable que se produzca deterioro en 
                comparación con las condiciones de lista de espera.
            </p>
        </div>
    )

  return (
    <Modal
        disabled={isLoading}
        isOpen = {thisModal.isOpen}
        title='Trastornos de Ansiedad'
        actionLabel='Listo'
        onClose={thisModal.onClose}
        onSubmit={onToggle}
        body = {bodyContent}
    />
  )
}

export default AnsiedadModal