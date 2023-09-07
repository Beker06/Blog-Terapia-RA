import React, { useCallback, useState } from 'react'
import Modal from '../Modal'
import Heading from '@/Components/Heading';
import { useCosteModal } from '@/hooks/modals/useVentajasModal';

const CosteModal = () => {

  const thisModal = useCosteModal();
    const [isLoading, setIsLoading] = useState(false);

    const onToggle = useCallback(() => {
        thisModal.onClose();
    }, [thisModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <Heading
                title="Coste"
            />
            <span className='text-white text-left '>
              La exposición en vivo es costosa porque requiere que el 
              terapeuta se desplace al lugar temido con el paciente. Las 
              intervenciones de exposición "sin terapeuta" todavía no 
              son muy frecuentes, y los pacientes suelen ser reacios a 
              participar en este tipo de tratamiento.
            </span>
        </div>
    )

  return (
    <Modal
        disabled={isLoading}
        isOpen = {thisModal.isOpen}
        title='Ventajas'
        actionLabel='Listo'
        onClose={thisModal.onClose}
        onSubmit={onToggle}
        body = {bodyContent}
    />
  )
}

export default CosteModal