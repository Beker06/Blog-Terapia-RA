import Heading from '@/Components/Heading';
import { useFuturaDosModal } from '@/hooks/modals/useFuturasModal';
import React, { useCallback, useState} from 'react'
import Modal from '../Modal';

const FuturaDos = () => {

    const thisModal = useFuturaDosModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Estructurando los contenidos corporales multisensoriales a través de la conciencia y la reorganización (mindful embodiment)"
            />
            <span className='text-white text-left '>
                Los individuos tienen distintos niveles de conciencia corporal, que es 
                el grado de sensibilidad, atención a las señales y sensaciones corporales. 
                La VR puede aplicarse para mejorar la conciencia corporal cuando se 
                integra con otras tecnologías como los biosensores. Por ejemplo, si se 
                integra con la formación en biorretroalimentación, puede utilizarse para 
                evaluar y controlar señales corporales específicas -como la frecuencia 
                cardiaca, la respuesta galvánica de la piel, la electromiografía o la 
                electroencefalografía que normalmente no se perciben conscientemente y 
                para informar de estas señales al paciente. A continuación, el paciente 
                puede aprender a desplazar estas señales medidas en la dirección deseada 
                mediante la retroalimentación proporcionada por la VR (por ejemplo, una 
                cascada cambia su caudal en función de la frecuencia cardiaca del individuo).
            </span>
        </div>
    )

  return (
    <Modal
        disabled={isLoading}
        isOpen = {thisModal.isOpen}
        title='Investigaciones Futuras'
        actionLabel='Listo'
        onClose={thisModal.onClose}
        onSubmit={onToggle}
        body = {bodyContent}
    />
  )
}

export default FuturaDos