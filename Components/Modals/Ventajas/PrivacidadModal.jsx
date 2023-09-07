import React, { useCallback, useState } from 'react'
import Modal from '../Modal';
import Heading from '@/Components/Heading';
import { usePrivacidadModal } from '@/hooks/modals/useVentajasModal';

const PrivacidadModal = () => {

  const thisModal = usePrivacidadModal();
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
      thisModal.onClose();
  }, [thisModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
        <Heading
            title="Privacidad y Confidencialidad"
        />
        <span className='text-white text-left '>
          La posibilidad que ofrece la VR de enfrentarse a muchos miedos 
          dentro de la consulta del terapeuta, sin necesidad de exponerse 
          en vivo, ofrece importantes ventajas de mayor privacidad y 
          confidencialidad.
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

export default PrivacidadModal